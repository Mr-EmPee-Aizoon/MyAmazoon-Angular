import { Injectable } from "@angular/core";
import { Cart } from "./cart/cart";
import { CartManagerService } from "./cart/cart-manager.service";
import { ModelModule } from "./model.module";

@Injectable({
    providedIn: ModelModule
})
export class OrderService {

    public cart:Cart;
    public name?:string;
    public surname?:string;
    public city?:string;
    public address?:string;

    constructor(
        cartManager:CartManagerService
    ) {
        this.cart = cartManager.getCart("default");
    }

    reset() {
        this.name = undefined;
        this.surname = undefined;
        this.city = undefined;
        this.address = undefined;
    }

}