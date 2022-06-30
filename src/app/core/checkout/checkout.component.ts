import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/cart/cart';
import { CartManagerService } from 'src/app/model/cart/cart-manager.service';
import { OrderService } from 'src/app/model/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  private cart:Cart;
  public sent = false;

  constructor(
    public order:OrderService,
  ) {
    this.cart = order.cart;
  }

  sendOrder(form:NgForm) {
    if(form.valid && !this.sent) {
      this.cart.reset();
      this.sent = true;
    }
  }

}
