import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


const httpOptions = { 
    headers: new HttpHeaders({ 
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
    })
}


@Injectable()
export class AuthService{

    constructor(private _httpClient: HttpClient){ }

    login(user):Observable<any>{

        return this._httpClient.post<any>('http://localhost:8080/api/v1/users/login', user)

    }

    getCurrentUser():Observable<any>{
        return this._httpClient.get<any>('http://localhost:8080/api/v1/users/getLoggedUser', httpOptions)

    }

}