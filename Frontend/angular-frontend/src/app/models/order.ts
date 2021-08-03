import { Product } from "./product";

export class Order{
    user: String;
    userDetails:  Object;
    orderPlacedOn: Date;
    isDelievered: Boolean;
    orderDeliveredOn: Date;
    cart: Array<Product>;
}