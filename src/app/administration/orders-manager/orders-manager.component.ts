import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { OrderService } from 'src/app/model/order.service';
import { OrderRepositoryService } from 'src/app/model/repo/order-repository.service';

@Component({
  selector: 'app-orders-manager',
  templateUrl: './orders-manager.component.html',
  styleUrls: ['./orders-manager.component.css']
})
export class OrdersManagerComponent {

  public orders:OrderService[] = [];

  constructor(
    private orderService:OrderRepositoryService
  ) {
    orderService.getOrders().subscribe(
      (orders) => {
        orders.forEach( order => {
          order.cart = Cart.fromJson(order.cart);
        })

        this.orders = orders;
      }
    )
  }

  private findOrderIndex(orderID:number) {
    return this.orders.findIndex( o => orderID == o.id);
  }

  removeOrder(orderID:number|undefined) {
    if(orderID) {
      this.orderService.deleteOrder(orderID)
        .subscribe(
          (r) => {
              this.orders.splice(this.findOrderIndex(orderID), 1);
          }
        );
    }
  }

}
