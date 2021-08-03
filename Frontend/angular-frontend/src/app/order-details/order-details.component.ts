import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id: any;

  orders: any;

  constructor(private _orderService: OrderService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    
    this._orderService.getUserOrder(this.id).subscribe(result => this.orders = result.orders);

    
  }

}
