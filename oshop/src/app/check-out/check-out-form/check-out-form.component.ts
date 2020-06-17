import { GenerateCartIdService } from 'src/app/service/generate-cart-id.service';
import { AuthService } from './../../service/auth.service';
import { Product } from 'src/app/model/product';
import { ItemsPlaced } from './../../model/itemsPlaced';
import { OrderService } from './../../service/order.service';
import { ShoppingCart } from 'src/app/model/shopping-cart';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from 'src/app/model/order';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit,OnDestroy{
  listOfItemsPlaced:ItemsPlaced[]=[]
  userId:string
  sub:Subscription
  @Input("shopping-cart") shoppingCart:ShoppingCart;

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    address1: new FormControl('',Validators.required),
    address2: new FormControl('',Validators.required),
    city: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]*")])
  });

  constructor(private orderService:OrderService, private authService:AuthService,
              private route:Router, private generateCartIdService:GenerateCartIdService) { }

  ngOnInit(){
    this.sub=this.authService.userDetails$.subscribe(user=>this.userId=user.uid)
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  async placeOrder(){
    let order:Order=new Order()
    for(let key in this.shoppingCart.items)
    {
      let item:ItemsPlaced=new ItemsPlaced()
      let product:Product=new Product()
      product.title=this.shoppingCart.items[key].product.title
      product.price=this.shoppingCart.items[key].product.price
      item.product=product
      item.quantity=this.shoppingCart.items[key].quantity
      item.totalPrice=item.quantity*item.product.price
      this.listOfItemsPlaced.push(item)
    }
    order.datePlaced=new Date().getTime()
    order.shippingInfo=this.form.value
    order.itemsPlaced=this.listOfItemsPlaced
    order.userId=this.userId
    let result=await this.orderService.saveOrder(order);
    if(result.key)
    {
      this.generateCartIdService.clearCart()
      this.route.navigate(['/order-success',result.key])
    }
  }

  
  get name(){
    return this.form.get('name');
  }
  get city(){
    return this.form.get('city');
  }
  get address1(){
    return this.form.get('address1');
  }
}
