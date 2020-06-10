import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilterCategoryComponent } from './products-filter-category.component';

describe('ProductsFilterCategoryComponent', () => {
  let component: ProductsFilterCategoryComponent;
  let fixture: ComponentFixture<ProductsFilterCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFilterCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFilterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
