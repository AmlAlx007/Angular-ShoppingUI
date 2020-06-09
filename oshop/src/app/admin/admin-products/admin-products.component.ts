import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productList$
  displayedColumns: string[] = ['title','price','edit'];
  constructor(productService:ProductService) {
    this.productList$=productService.getAllProducts().snapshotChanges().pipe(map((res)=> res.map((result)=>{return {
      key:result.payload.key,
      content:<Product>result.payload.val()
    }})))

   }

  ngOnInit(): void {
  }


}
