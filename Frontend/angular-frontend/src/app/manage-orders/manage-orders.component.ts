import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orders: any;
  

  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {

    this._orderService.getAllOrders().subscribe(result=> this.orders= result.orders);  
  }

  process(id){
    this._orderService.processOrder(id).subscribe(result => console.log(result));
    setTimeout(()=> {
      window.location.reload()
    },10)

  }


  deleteOrder(id){
    this._orderService.deleteOrder(id).subscribe(result=> console.log(result));
    setTimeout(()=> {
      window.location.reload()
    },10)
  }

}
