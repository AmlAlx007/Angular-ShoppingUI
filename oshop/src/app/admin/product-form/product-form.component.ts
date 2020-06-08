import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public show:boolean=true;
  public categoryList$:string[];
  constructor(categoryService:CategoryService) { 
    categoryService.getCategory().valueChanges().subscribe((result)=>{
        this.categoryList$=result
    });
  }

  ngOnInit(): void {}

  submitForm(form)
  {
    
  }
 

}
