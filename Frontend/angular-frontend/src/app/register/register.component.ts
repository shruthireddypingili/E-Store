import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User = new User();

  constructor(private _httpClient: HttpClient, private _router: Router, 
    private _userService: UserService) { }

  ngOnInit(): void {
    
  }

  addUser(){
    this._userService.registerUser(this.user).subscribe(user => {
      this.user = user;
    });
    this._router.navigate(['login']);
  
 
  }

}
