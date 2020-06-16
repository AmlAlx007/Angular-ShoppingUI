import { Observable } from 'rxjs';
import { GenerateCartIdService } from 'src/app/service/generate-cart-id.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  shoppingCart$:Observable<ShoppingCart>;
  constructor(private generateCartIdService:GenerateCartIdService) { 
  }

  async ngOnInit(){
    this.shoppingCart$=(await this.generateCartIdService.getCartObject())
  }

}
