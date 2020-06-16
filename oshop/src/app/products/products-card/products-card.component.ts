import { ShoppingCart } from './../../model/shopping-cart';
import { Product } from './../../model/product';
import { Component, OnInit, Input } from '@angular/core';
import { GenerateCartIdService } from 'src/app/service/generate-cart-id.service';

@Component({
  selector: 'products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent {
  cartId:string;
  quantity:number;
 @Input('product') product:Product;
 @Input('showActions') showActions;
 @Input('shopping-cart') shoppingCart:ShoppingCart;

 constructor(){}
}
