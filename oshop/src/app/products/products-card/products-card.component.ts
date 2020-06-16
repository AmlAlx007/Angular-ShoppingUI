import { GenerateCartIdService } from './../../service/generate-cart-id.service';
import { Product } from './../../model/product';
import { Component, OnInit, Input } from '@angular/core';

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
 @Input('shopping-cart') shoppingCart;

 constructor(private generateCardId:GenerateCartIdService){}

 addToCart(product:Product){
   this.generateCardId.addToCart(product)
 }
 deleteFromCart(product:Product)
 {
   this.generateCardId.deleteFromCart(product)
 }
 getQuantity()
 {
    if(this.shoppingCart.items!=null){
      let product=this.shoppingCart.items[this.product.key]
      if(product!=null)
        return product.quantity
    }
    
    return 0
 }
}
