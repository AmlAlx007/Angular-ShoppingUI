import { Product } from './../../model/product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent {

 @Input('product') product:Product;
 @Input('showActions') showActions;
 constructor(){}

}
