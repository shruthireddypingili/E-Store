import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topProducts : Array<Product> = [];

  categoryListing: Array<Product> = []

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(result => {
      this.topProducts = result.products;

      this._productService.getCatgoryListing().subscribe( result => {
        this.categoryListing = result.products;
        console.log(result);
      })
    })
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
