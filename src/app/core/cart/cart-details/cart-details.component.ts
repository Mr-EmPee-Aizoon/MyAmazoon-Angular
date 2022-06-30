import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { CartItem } from 'src/app/model/cart/cart-item';
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

  updateItemQuantity(item:CartItem, quantityInput:HTMLInputElement) {
    let newQuantity = Number(quantityInput.value);

    if(newQuantity <= 0) {
      this.cart.removeItem(item);
    } else {
      this.cart.updateItemQuantity(item,  newQuantity);
    }

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
