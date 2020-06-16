import { ShoppingCart } from 'src/app/model/shopping-cart';
import { element } from 'protractor';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { GenerateCartIdService } from '../service/generate-cart-id.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  cart$:Observable<ShoppingCart>
  shoppingCart:ShoppingCart;
  quantity:number;
  price:number=0;
  cartId:string;

  ObjectKeys(value){
    if(value!=null)
      return Object.keys(value)
  }


constructor(private generateCartIdService:GenerateCartIdService){}

  async ngOnInit(){
    this.cartId=localStorage.getItem('cartId')
    this.cart$=(await this.generateCartIdService.getCartObject());
  }

  clearCart(cart:ShoppingCart){
    this.generateCartIdService.clearCart() 
  }

}
