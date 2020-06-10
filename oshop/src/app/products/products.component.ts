import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../service/category.service';
import { ProductService } from './../service/product.service';
import { Product } from '../model/product';
import { take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  productList$:Product[]=[];
  filteredProductList$:Product[]=[];
  categoryList$;
  category:string;

  constructor(private productService:ProductService,
    private route:ActivatedRoute) { 
      this.productService.getAllProducts().valueChanges().pipe(take(1)).pipe(switchMap((products)=>{
        this.productList$=products
        return this.route.queryParamMap}))
        .subscribe(params=>{
          this.category=params.get('category')
          if(this.category!=null)
          {
            this.filteredProductList$=(this.category!="all") ? this.productList$.filter(p=>p.category == this.category) : this.productList$
          }else{
            this.filteredProductList$=this.productList$
          }
        });
    }
}
