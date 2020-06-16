import { map, switchMap } from 'rxjs/operators';
import { ProductService } from './../../service/product.service';
import { Component,ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  productList$
  filteredProductList$
  product={} as Product
  dataSource
  displayedColumns: string[] = ['title','price','edit'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private productService:ProductService) {

   this.filteredProductList$=this.productList$= this.productService.getAllProducts().snapshotChanges()
    .pipe(map((res)=> res.map((result)=>{ return  {Product: result.payload.val(), key: result.key}
  })));
      console.log(this.filteredProductList$)
  }
  
}
