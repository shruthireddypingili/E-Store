import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = new User();

  id:any;


  constructor(private _userService:UserService, private _activatedRoute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {
   
    
    this._userService.getUserById(this._activatedRoute.snapshot.paramMap.get('id')).subscribe(result=> this.user = result.profile);
  }

  updateUser(){
    this._userService.editUser(this._activatedRoute.snapshot.paramMap.get('id'),this.user).subscribe(result => console.log(result));
   
    
    
  }

}
