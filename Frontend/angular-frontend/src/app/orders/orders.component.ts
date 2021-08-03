import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<Order> = [];

  constructor(private _orderService: OrderService, private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.getCurrentUser().subscribe(result=>{
      this._orderService.getUserOrder(result._id).subscribe(result=> this.orders= result.orders);
    });

  
  }

  

  

}
