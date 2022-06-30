import { Product } from "../product";
import { CartItem } from "./cart-item";

export class Cart {

    private items:CartItem[] = [];
    private totalProducts = 0;
    private totalPrice = 0;

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

    reset() {
        this.items = [];
    }

    addProduct(product:Product) {
        let item = this.containsItem(product.id);
        if(item == undefined) {
            this.items.push(new CartItem(product, 1));
        } else {
            item.quantity += 1;
        }

        this.totalProducts += 1;
        this.totalPrice += product.price;
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

            this.totalProducts -= 1;
            this.totalPrice -= product.price;
        }
    }

    updateItemQuantity(item:CartItem, quantity:number) {
        let difference=quantity-item.quantity;
        item.quantity += difference;

        if(difference>0) {
            this.totalProducts += difference;
            this.totalPrice += difference*item.price;
        } else {
            difference = -difference;
            if(item.quantity <= 0) {
                this.items.splice(
                    this.items.indexOf(item),
                    1
                );
                this.totalProducts -= item.quantity;
            } else {
                this.totalProducts -= difference;
                this.totalPrice -= difference*item.price;
            }
        }
    }

    removeItem(item:CartItem) {
        this.items.splice(
            this.items.indexOf(item),
            1
        );

        this.totalProducts -= item.quantity;
        this.totalPrice -= item.quantity*item.price;
    }

    getItems() {
        return Array.from(this.items);
    }

    getTotalProducts() {
        return this.totalProducts;
    }

    getTotalPrice() {
        return this.totalPrice;
    }

}