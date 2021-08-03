import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";


const httpOptions = { 
    headers: new HttpHeaders({ 
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
    })
}


@Injectable()
export class ProductService{

    constructor(private _httpClient: HttpClient){ }

    
    getProducts():Observable<any>{
        
        return this._httpClient.get<any>('http://localhost:8080/api/v1/homepage/products',);

    }
    
    getCatgoryListing():Observable<any>{
        return this._httpClient.get<any>('http://localhost:8080/api/v1/homepage/banner');
    }

    addProduct(product):Observable<Product>{
        console.log(product);
        return this._httpClient.post<Product>('http://localhost:8080/admin/add-new-product', product,httpOptions)

    }

    getAllProducts():Observable<any>{
        
        return this._httpClient.get<any>('http://localhost:8080/api/v1/products');

    }

    editProduct(product, id):Observable<Product>{
        return this._httpClient.patch<Product>(`http://localhost:8080/api/v1/admin/products/${id}`, product,httpOptions);
    }

    getProductById(id):Observable<any>{
        return this._httpClient.get<any>(`http://localhost:8080/api/v1/products/${id}`,httpOptions);   

    }

    deleteProduct(id):Observable<any>{
        return this._httpClient.delete<any>(`http://localhost:8080/api/v1/admin/products/${id}`,httpOptions)
    }

    checkout(order):Observable<any>{
        return this._httpClient.post<any>('http://localhost:8080/api/v1/checkout',order)

    }

}