import { ShoppingCartItem } from './shopping-cart-item';
export class ShoppingCart{  

    
    constructor(public items:ShoppingCartItem[]){}

    getTotalItems(){
        let noOfItems=0;
        for(let val in this.items)
        {
            noOfItems+=this.items[val].quantity
        }
        return noOfItems;
    }
    getTotalPrice(){
        let totalPrice=0;
        for(let val in this.items)
        {
            totalPrice+=this.items[val].quantity * this.items[val].product.price
        }
        return totalPrice;
    }

}