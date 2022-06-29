import { Product } from "../product";

export class CartItem {

    public id:number;
    public price:number;

    constructor(
        public product:Product,
        public quantity:number
    ) {
        this.id = product.id;
        this.price = product.price ? product.price : 0;
    }

    getTotalPrice() {
        return this.quantity * this.price;
    }

}