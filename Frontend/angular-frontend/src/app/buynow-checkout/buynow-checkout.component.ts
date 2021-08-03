import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-buynow-checkout',
  templateUrl: './buynow-checkout.component.html',
  styleUrls: ['./buynow-checkout.component.css']
})
export class BuynowCheckoutComponent implements OnInit {

  order: any = {

    firstName: '',
    lastName: '',
    email: '',
    cart: []
  }
  product: Product = new Product();

  user: User = new User();

  constructor(private _authService: AuthService, private _productService: ProductService, private _router: Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._authService.getCurrentUser().subscribe(result => this.user = result);
    this._productService.getProductById(this._activatedRoute.snapshot.paramMap.get('id')).subscribe(result =>this.product = result);
  }

  placeOrder(){
   
    this.order.firstName = this.user.firstName;
    this.order.lastName = this.user.lastName;
    this.order.email = this.user.email;
  
    let cart=[];
    cart.push(this.product);
    this.order.cart = cart;
     this._productService.checkout(this.order).subscribe(result=> console.log(result));
     localStorage.removeItem("cart");
     this._router.navigate(['/orders']);



  
  }

}
