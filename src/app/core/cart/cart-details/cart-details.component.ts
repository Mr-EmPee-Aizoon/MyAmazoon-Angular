import { Component, OnInit } from '@angular/core';
import { CartManagerService } from 'src/app/model/cart/cart-manager.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {

  private cart = this.cartManager.getCart("default");

  constructor(
    private cartManager:CartManagerService
  ) { }

  get items() {
    return this.cart.getItems();
  }

  removeItem(productID:number) {
    let product = this.cart.containsItem(productID);
    if(product) {
      this.cart.removeItem(product);
    }
  }

}
