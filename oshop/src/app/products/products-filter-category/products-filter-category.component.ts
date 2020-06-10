import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-filter-category',
  templateUrl: './products-filter-category.component.html',
  styleUrls: ['./products-filter-category.component.css']
})
export class ProductsFilterCategoryComponent {
  categoryList$
  constructor(private categoryService:CategoryService) {

  this.categoryList$=this.categoryService.getCategory().valueChanges();
  }
}
