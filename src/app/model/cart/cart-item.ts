import { Product } from "../product";

export class CartItem {

    public id:number;
    public title:string;
    public price:number;

    constructor(
        public product:Product,
        public quantity:number
    ) {
        this.id = product.id;
        this.title = product.title? product.title : "unkown product";
        this.price = product.price ? product.price : 0;
    }

    getTotalPrice() {
        return this.quantity * this.price;
    }

}