import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/cart/cart';
import { OrderService } from 'src/app/model/order.service';
import { OrderRepositoryService } from 'src/app/model/repo/order-repository.service';

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
    private orderRepository:OrderRepositoryService
  ) {
    this.cart = order.cart;
  }

  sendOrder(form:NgForm) {
    if(form.valid && !this.sent) {
      this.orderRepository.saveOrder(this.order).subscribe(
        (response) => {
          this.cart.reset();
          this.order.reset();
          this.sent = true;
        }
      );
    }
  }

}
