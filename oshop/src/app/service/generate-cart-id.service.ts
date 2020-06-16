import { AngularFireObject } from 'angularfire2/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { take, map } from 'rxjs/operators';
import { ShoppingCart } from '../model/shopping-cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateCartIdService {
  cartId:string;
  constructor(private db:AngularFireDatabase) { }

  private generate()
  {
    return this.db.list("/shopping-carts").push({
      dateCreated: new Date().getTime()
    })
  }

  async getCartObject(): Promise<AngularFireObject<ShoppingCart>>{
    let cartId=await this.getOrCreateCart()
    return this.db.object<ShoppingCart>('/shopping-carts/'+cartId);
  }

  private async getOrCreateCart()
  {
    this.cartId=localStorage.getItem('cartId')
    if(this.cartId) return this.cartId

    let cartId=await this.generate()
    localStorage.setItem('cartId',cartId.key)
    return cartId.key
  }
  async addToCart(product:Product){
    let cartId=await this.getOrCreateCart()
    let item$=this.db.object('/shopping-carts/'+cartId+'/items/'+product.key)
    item$.valueChanges().pipe(take(1)).subscribe((item)=>{
      if(item) item$.update({quantity:item['quantity']+1});
      else item$.update({
        product : product,
        quantity : 1
      })
    });

  }

  async deleteFromCart(product:Product){
    let cartId=await this.getOrCreateCart()
    let item$=this.db.object('/shopping-carts/'+cartId+'/items/'+product.key)
    item$.valueChanges().pipe(take(1)).subscribe((item)=>{
      if(item['quantity']>1)item$.update({quantity:item['quantity']-1});
      else item$.remove()
    });
  }


}
