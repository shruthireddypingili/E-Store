import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cartItems: any;

  user: User = new User();

  constructor(private _authService: AuthService, private _authGuard: AuthGuard){ }

  isLoggedIn: boolean;

 

  title = 'angular-frontend';

  ngOnInit(): void {

    this._authService.getCurrentUser().subscribe(result => this.user = result);
    this.isLoggedIn = this._authGuard.isLoggedIn();
    this.getCartNumber();

  }

 getCartNumber(){
   this.cartItems = JSON.parse(localStorage.getItem("cart"))
  
 }

  logout(){
    localStorage.removeItem("authToken");
    localStorage.removeItem("cart");
    setTimeout(()=>{
      window.location.reload();
    }, 10)

  }

  




}
