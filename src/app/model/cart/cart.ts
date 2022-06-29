import { Product } from "../product";
import { CartItem } from "./cart-item";

export class Cart {

    private products:CartItem[] = [];

    constructor(
        private cartToken:string
    ) {

    }

    containsProduct(prodID:number) {
        return this.products.find(
            (prod) => prod.id == prodID
        );
    }

    getCartToken() {
        return this.cartToken;
    }

    addProduct(product:Product) {
        let item = this.containsProduct(product.id);
        if(item == undefined) {
            this.products.push(new CartItem(product, 1));
        } else {
            item.quantity += 1;
        }
    }

    getProducts() {
        return Array.from(this.products);
    }

    getTotalProducts() {
        if(this.products.length == 0) {
            return 0;
        }

        return this.products
            .map( (product) => product.quantity)
            .reduce( (q1, q2) => q1+q2);
    }

    getTotalPrice() {
        return this.products
            .map( (product) => product.price ? product.price : 0 )
            .reduce( (p1, p2) => p1 + p2 );
    }

}