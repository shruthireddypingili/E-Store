import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private _authService: AuthService, private _router:Router) { }

  ngOnInit(): void {
    
  }

  SignIn(){
    this._authService.login(this.user).subscribe(result => {
      localStorage.setItem("authToken",result.authToken);
      alert('Logged In Successfully!!')
      this._router.navigate(['/home']);

      
    setTimeout(()=>{
      window.location.reload();
    }, 10)


    },(error=>{
      alert(error.error);
    }))

  

  }

}
