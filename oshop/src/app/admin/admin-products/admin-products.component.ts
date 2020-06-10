import { map } from 'rxjs/operators';
import { ProductService } from './../../service/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  productList$
  dataSource
  displayedColumns: string[] = ['title','price','edit'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(productService:ProductService) {
    this.productList$=productService.getAllProducts().snapshotChanges().pipe(map((res)=> res.map((result)=>{return {
      key:result.payload.key,
      content:<Product>result.payload.val()
    }})))
  }

}
