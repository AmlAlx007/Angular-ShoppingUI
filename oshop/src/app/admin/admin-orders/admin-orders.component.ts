import { OrderService } from './../../service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orderList;
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().valueChanges().subscribe(result=>{
      console.log(result)
    })
  }

}
