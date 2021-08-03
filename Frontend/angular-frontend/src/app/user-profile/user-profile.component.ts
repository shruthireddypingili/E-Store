import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: any;

  user: any ;

  address: Address = new Address();

  
  constructor(private _authService: AuthService, 
    private _userService: UserService) { }

  ngOnInit(): void {
    this._authService.getCurrentUser().subscribe(result => this.user = result);
    
  }

  updateAdd(){
    
    this.address.streetAddress = this.user.address.streetAddress;
    this.address.city = this.user.address.city;
    this.address.state = this.user.address.state;
    this.address.zipcode = this.user.address.zipcode;

    this._userService.updateAddress(this.user._id,this.address).subscribe(result => this.user = result);

    setTimeout(()=>{
      window.location.reload();
    }, 10)
  }


}
