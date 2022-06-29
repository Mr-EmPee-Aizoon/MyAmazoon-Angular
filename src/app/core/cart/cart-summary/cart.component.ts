import { Component, OnInit } from '@angular/core';
import { CartManagerService } from 'src/app/model/cart/cart-manager.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartManager:CartManagerService) { }

  private getCart() {
    return this.cartManager.getCart("default");
  }

  get productsCount() {
    return this.getCart().getTotalProducts();
  }

}
