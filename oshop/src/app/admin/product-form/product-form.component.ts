import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import {take} from 'rxjs/operators';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  public categoryList$:string[];
  delete:boolean=false;
  productDetail$={} as Product
  key:string;
  constructor(categoryService:CategoryService, private productService:ProductService, 
              private activatedRoute:ActivatedRoute, private route:Router, public matDialog:MatDialog) { 
    this.key=this.activatedRoute.snapshot.paramMap.get('key')
    if(this.key)
    {
      this.productService.getProduct(this.key).valueChanges().pipe(take(1)).subscribe((res)=>{
        this.productDetail$=res
      })
    }
    categoryService.getCategory().valueChanges().subscribe((result)=>{
        this.categoryList$=result
    });
  }
  submitForm(product)
  {
    if(this.key) this.productService.updateProduct(this.key,product)
    else this.productService.storeProduct(product);
    
    this.route.navigate(['/admin/products'])
  }
  
  deleteProduct()
  {
    const dialogRef=this.matDialog.open(ProductFormComponentDialog)
    dialogRef.afterClosed().subscribe((result)=>{
      if(result=='ok') 
      {
        this.productService.deleteProduct(this.key);
        this.route.navigate(['/admin/products/']);

    }})
    
  }

}

@Component({
  selector: 'product-form-component-dialog',
  templateUrl: './product-form-component-dialog.html',
})
export class ProductFormComponentDialog {}