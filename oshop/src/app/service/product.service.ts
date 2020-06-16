import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  storeProduct(product){

    return this.db.list('/products').push(product);
  }

  getAllProducts():AngularFireList<Product>
  {
    return this.db.list('/products');
  }

  getProduct(productId){
    return this.db.object<Product>('/products/'+productId)
  }

  updateProduct(productId,product){
    return this.db.object('/products/'+productId).update(product)
  }
  deleteProduct(productId)
  {
    this.db.object('/products/'+productId).remove()
  }

}

