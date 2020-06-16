import { element } from 'protractor';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { GenerateCartIdService } from '../service/generate-cart-id.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

cart$
quantity:number;
price:number=0;

ObjectKeys(val){
  return Object.keys(val)
}


constructor(private generateCartIdService:GenerateCartIdService){}

async ngOnInit(){

  this.cart$=(await this.generateCartIdService.getCartObject()).valueChanges()
   .pipe(map(element=>{
      this.price=this.quantity=0
      if(!element.items)
          return null
      for(let val in element.items)
      {
        this.quantity+=element.items[val].quantity
        this.price+=element.items[val].quantity * element.items[val].product.price
      }
      return element
   }));
}

}
