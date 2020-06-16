import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';
import { Product } from '../model/product';
import { take, switchMap, map } from 'rxjs/operators';
import { GenerateCartIdService } from '../service/generate-cart-id.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../model/shopping-cart';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productList$:Product[]=[];
  filteredProductList$:Product[]=[];
  categoryList$;
  category:string;
  product={} as Product
  shoppingCart$:Observable<ShoppingCart>

  constructor(private productService:ProductService,
              private route:ActivatedRoute,
              private generateCartIdService:GenerateCartIdService) { }
    async ngOnInit()
    {
      this.shoppingCart$=(await this.generateCartIdService.getCartObject());
      this.populateProduct();
    }
    private populateProduct(){
      this.productService.getAllProducts().snapshotChanges().pipe(switchMap((res)=>{ 
        this.productList$=res.map((result)=>{
          this.product=result.payload.val()
          this.product.key=result.key
          return this.product})
        return this.route.queryParamMap}))
        .subscribe(params=>{
          this.category=params.get('category')
          this.filterByCategory();
        });
    }
    private filterByCategory()
    {
      if(this.category!=null)
          {
            this.filteredProductList$=(this.category!="all") ? this.productList$.filter(p=>p.category == this.category) : this.productList$
          }else{
            this.filteredProductList$=this.productList$
          }
    }

}
