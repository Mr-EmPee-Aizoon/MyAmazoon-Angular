import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { CartManagerService } from 'src/app/model/cart/cart-manager.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {

  private cart:Cart;

  constructor(cartManager:CartManagerService) {
    this.cart = cartManager.getCart("default");
  }

  get items() {
    return this.cart.getItems();
  }

  removeItem(productID:number) {
    let product = this.cart.containsItem(productID);
    if(product) {
      this.cart.removeItem(product);
    }
  }

  get totalPrice() {
    return this.cart.getTotalPrice();
  }

  get totalItems() {
    return this.cart.getItems().length;
  }

  get totalProduct() {
    return this.cart.getTotalProducts();
  }

}
