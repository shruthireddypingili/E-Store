import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  searchFilter: string='';



  product: Product = new Product();

  productList: Array<Product> = [];

  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this.getAllProd();
  }

  getAllProd(){
    this._productService.getAllProducts().subscribe(result => this.productList = result.products);
    
  }

addToCart(product){

    if(localStorage.getItem("cart")){
      let cart = JSON.parse(localStorage.getItem("cart"));
      for(let i=0; i<cart.length; i++){
        if(cart[i]._id == product._id){
          cart[i].qty++;
          console.log(cart[i]);
        }
      }
      if(cart.map(function (e){
        return e._id;
      }).indexOf(product._id) == -1){
        cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product has been added to cart!!")
    }else{
      let cart = [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product has been added to cart!!")

    }
    setTimeout(()=>{
      window.location.reload();
    }, 10)
  }



}
