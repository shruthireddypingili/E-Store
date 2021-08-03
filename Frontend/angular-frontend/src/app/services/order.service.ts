import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


const httpOptions = { 
    headers: new HttpHeaders({ 
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
    })
}
@Injectable()
export class OrderService{

    
    constructor(private _httpClient: HttpClient ){ }

    getUserOrder(id):Observable<any>{
        console.log(id);
        return this._httpClient.get<any>(`http://localhost:8080/api/v1/orders/${id}`, httpOptions)
       
    }

    getAllOrders():Observable<any>{
        return this._httpClient.get<any>(`http://localhost:8080/api/v1/admin/orders`, httpOptions)
    }

    processOrder(id):Observable<any>{
        return this._httpClient.patch<any>(`http://localhost:8080/api/v1/orders/${id}`,id,httpOptions)
    }

    deleteOrder(id):Observable<any>{
        return this._httpClient.delete<any>(`http://localhost:8080/api/v1/admin/orders/${id}`, httpOptions)
        
    }


}