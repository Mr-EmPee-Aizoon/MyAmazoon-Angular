import { Product } from "../product";
import { CartItem } from "./cart-item";

export class Cart {

    private items:CartItem[] = [];

    constructor(
        private cartToken:string
    ) {

    }

    containsItem(prodID:number) {
        return this.items.find(
            (prod) => prod.id == prodID
        );
    }

    getCartToken() {
        return this.cartToken;
    }

    addProduct(product:Product) {
        let item = this.containsItem(product.id);
        if(item == undefined) {
            this.items.push(new CartItem(product, 1));
        } else {
            item.quantity += 1;
        }
    }

    removeProduct(product:Product) {
        let item = this.containsItem(product.id);
        if(item) {
            if(item.quantity == 1) {
                this.items.splice(
                    this.items.indexOf(item),
                    1
                );
            } else {
                item.quantity -= 1;
            }
        }
    }

    removeItem(product:Product) {
        let item = this.containsItem(product.id);
        if(item) {
            this.items.splice(
                this.items.indexOf(item),
                1
            );
        }
    }

    getItems() {
        return Array.from(this.items);
    }

    getTotalProducts() {
        if(this.items.length == 0) {
            return 0;
        }

        return this.items
            .map( (item) => item.quantity)
            .reduce( (q1, q2) => q1+q2);
    }

    getTotalPrice() {
        if(this.items.length == 0) {
            return 0;
        }

        return this.items
            .map( (item) => item.price ? item.price * item.quantity : 0 )
            .reduce( (p1, p2) => p1 + p2 );
    }

}