import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";


const httpOptions = { 
    headers: new HttpHeaders({ 
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
    })
}

@Injectable()
export class UserService{


    constructor(private _httpClient: HttpClient){ }

    registerUser(user):Observable<any>{
        console.log(user);
        return this._httpClient.post<any>('http://localhost:8080/api/v1/users/register', user);

    }

    updateAddress(id,address):Observable<any>{
        return this._httpClient.patch<any>(`http://localhost:8080/api/v1/profile/address/${id}`,address,httpOptions);
        
    }


    getAllUsers():Observable<any>{
        
        return this._httpClient.get<any>('http://localhost:8080/getAllUsers',httpOptions);

    }

    
    editUser(user, id):Observable<User>{
        return this._httpClient.patch<User>(`http://localhost:8080/api/v1/admin/users/${id}`, user);
    }

    getUserById(id):Observable<any>{
        return this._httpClient.get<any>(`http://localhost:8080/getUserById/${id}`,httpOptions);   


    }

    addUser(user):Observable<User>{
        console.log(user);
        return this._httpClient.post<User>('http://localhost:8080/api/v1/users/register', user)

    }

    delUser(id):Observable<any>{
        return this._httpClient.delete<any>(`http://localhost:8080/api/v1/admin/users/${id}`,httpOptions)
    }





    

}