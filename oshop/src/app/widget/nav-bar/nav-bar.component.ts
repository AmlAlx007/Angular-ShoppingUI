import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from './../../model/shopping-cart-item';
import { element } from 'protractor';
import { GenerateCartIdService } from './../../service/generate-cart-id.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/model/App-User';
import { ShoppingCart } from 'src/app/model/shopping-cart';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  quantity:number=0;
  appUser:AppUser;
  cart$

  constructor(private auth:AuthService, private generateCartIdService:GenerateCartIdService) { 

    auth.appUsers$.subscribe(value=>this.appUser=value) 
  } 
  getTotalQuantity(){
 
     return this.quantity
        
  }
  logout()
  {
    this.auth.logout()
  }
  async ngOnInit(){
    this.cart$=(await this.generateCartIdService.getCartObject()).valueChanges().pipe(map( src => {
      this.quantity=0
      for(let val in src.items)
        this.quantity+=src.items[val].quantity
      return this.quantity
    }));
    
  }
}
