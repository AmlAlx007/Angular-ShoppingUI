import { ItemsPlaced } from './itemsPlaced';

export class Order{
    datePlaced:number;
    shippingInfo;
    itemsPlaced:ItemsPlaced[]
    userId:string
}