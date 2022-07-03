import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelModule } from '../model.module';
import { OrderService } from '../order.service';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class StaticDatasourceService {

  private isntTheSameInstance = Math.random();
  private products = [

    { id: 1, "title": "Galaxy S10", "description": "4 GB RAM   64 GB ROM, Grigio", "category": "SMARTPHONE", "price": 450.5 },
    { id: 2, "title": "Inspiron 5000", "description": "2 in 1, 16 GB RAM   256 GB SSD", "category": "LAPTOP", "price": 999.99 }

  ];

  private orders:string[] = [];

  constructor() { }

  getProducts() {
    return new Observable<Product[]>((subscriber) => {

      subscriber.next(this.products);
      subscriber.complete();

    })
  }


  deleteProduct(prodID:number) {
    return new Observable<number>((subscriber) => {

      let index = this.products.findIndex(product => prodID == product.id);
      if(index >= 0) {
        this.products.splice(
          index, 1
        )
        subscriber.next(index)
      } else {
        subscriber.error("Unable to find the product")
      }

    })
  }

  getOrders() {
    return new Observable<OrderService[]>((subscriber) => {

      subscriber.next(this.orders.map( o => JSON.parse(o)));
      subscriber.complete();

    })
  }

  deleteOrder(orderID:number) {
    return new Observable<number>((subscriber) => {

      let index = this.orders.findIndex(order => orderID == JSON.parse(order).id );
      if(index >= 0) {
        this.products.splice(
          index, 1
        )
        subscriber.next(index)
      } else {
        subscriber.error("Unable to find the order")
      }

      subscriber.complete();

    })
  }

  saveOrder(order:OrderService) {
    return new Observable<OrderService>((subscriber) => {

      this.orders.push(JSON.stringify(order))
      subscriber.next(order);
      subscriber.complete();

    })
  }


}
