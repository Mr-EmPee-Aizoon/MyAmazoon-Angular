import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { CartManagerService } from 'src/app/model/cart/cart-manager.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {

  private cart:Cart;

  constructor(cartManager:CartManagerService) {
    this.cart = cartManager.getCart("default")
  }

  get productsCount() {
    return this.cart.getTotalProducts();
  }

  get totalPrice() {
    return this.cart.getTotalPrice();
  }

}
