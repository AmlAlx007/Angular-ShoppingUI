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

ObjectKeys(val){
  return Object.keys(val)
}


constructor(private generateCartIdService:GenerateCartIdService){}

async ngOnInit(){

  this.cart$=(await this.generateCartIdService.getCartObject()).valueChanges()
   .pipe(map(element=>{
      console.log(element)
       if(!element.items)
        return null
      return element
   }));
}

}
