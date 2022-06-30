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
        this.title = product.title;
        this.price = product.price ? product.price : 0;
    }

    getTotalPrice() {
        if(this.quantity <= 0) {
            return 0;
        }
        
        return this.quantity * this.price;
    }

}