import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  user: User = new User()

  userList: Array<User>=[]

  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){

    this._userService.getAllUsers().subscribe(result => this.userList = result)
  }

  addProd(){
    this._userService.addUser(this.user).subscribe(result => this.user = result);
    this._router.navigate(['/manage-users'])
    setTimeout(()=>{
      window.location.reload();
    }, 10)
    console.log(this.user);
  }

  deleteUser(id){
    this._userService.delUser(id).subscribe(result=> this.user = result.user);
    alert("User is deleted Successfully");
    setTimeout(()=>{
      window.location.reload();
    }, 10)
  }


}
