import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'src/app/model/shopping-cart';

@Component({
  selector: 'check-out-card',
  templateUrl: './check-out-card.component.html',
  styleUrls: ['./check-out-card.component.css']
})
export class CheckOutCardComponent implements OnInit {

@Input("shopping-cart") shoppingCart:ShoppingCart;
constructor() {
 }

ObjectKeys(value){
if(value!=null)
  return Object.keys(value)
}

ngOnInit(): void {
  
}

}
