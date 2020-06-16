import { ShoppingCart } from './../model/shopping-cart';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { GenerateCartIdService } from '../service/generate-cart-id.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') product:Product;
  @Input('shopping-cart') shoppingCart:ShoppingCart;

  constructor(private generateCardIdService:GenerateCartIdService) { }

  getQuantity()
  {
    if(this.shoppingCart.items!=null){
      let product=this.shoppingCart.items[this.product.key]
      if(product!=null)
        return product.quantity
    }
    return 0
  }


  addToCart(product:Product){
    this.generateCardIdService.addToCart(product)
  }
  deleteFromCart(product:Product)
  {
    this.generateCardIdService.deleteFromCart(product)
  }
}
