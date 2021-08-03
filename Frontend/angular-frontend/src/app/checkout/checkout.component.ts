import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order: any = {

    firstName: '',
    lastName: '',
    email: '',
    cart: []
  }

  user: User = new User();

  constructor(private _authService: AuthService, private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this._authService.getCurrentUser().subscribe(result => this.user = result);
    
  }

  placeOrder(){
   
    this.order.firstName = this.user.firstName;
    this.order.lastName = this.user.lastName;
    this.order.email = this.user.email;
  

     this.order.cart = JSON.parse(localStorage.getItem("cart"));
     this._productService.checkout(this.order).subscribe(result=> console.log(result));
     localStorage.removeItem("cart");
     this._router.navigate(['/orders']);



  
  }

}
