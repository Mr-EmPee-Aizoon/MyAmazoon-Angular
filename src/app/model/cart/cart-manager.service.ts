import { Injectable } from '@angular/core';
import { ModelModule } from '../model.module';
import { Cart } from './cart';

@Injectable({
  providedIn: ModelModule
})
export class CartManagerService {

  private carts:Cart[] = [];

  getCart(cartToken:string) {
    let cart = this.carts.find(
      (cart) => cart.getCartToken() == cartToken
    );

    if(cart == undefined) {
      cart = new Cart(cartToken);
      this.carts.push(cart);
    }

    return cart;
  }

}
