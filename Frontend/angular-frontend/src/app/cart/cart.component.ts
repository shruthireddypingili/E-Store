import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
 cartItems: Array<Product> = [];

 cartTotal = 0;

  constructor(private _router:Router) { }

  ngOnInit(): void {
   this.getAllCartItems();
  }

  getAllCartItems(){

    let cart = JSON.parse(localStorage.getItem("cart"));
    this.cartItems = cart;
    for( let i=0; i< cart.length; i++){
      this.cartTotal += cart[i].discountPrice * cart[i].qty;
    }

  }

  deleteFromCart(id){
    let cart = JSON.parse(localStorage.getItem("cart"));
    let index =0;
    for(let i=0; i<cart.length; i++){
      if(cart[i]._id === id){
        index = i;
        break;
      }
    }

    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    this._router.navigate(['/cart']);
    
    setTimeout(()=>{
      window.location.reload();
    }, 10)

  }



  



}
