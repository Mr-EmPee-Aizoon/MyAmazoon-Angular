import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelModule } from '../model.module';
import { OrderService } from '../order.service';
import { Product } from '../product';

@Injectable({
  providedIn: ModelModule
})
export class RestDatasourceService {

  private dbURL = "http://localhost:3000/";
   
  private products:Product[] = [];

  constructor(
    private httpClient:HttpClient
  ) {}

  getProducts() {
    return this.httpClient.get<Product[]>(this.dbURL + "products");
  }


  deleteProduct(prodID:number) {
    return this.httpClient.delete<Product>(this.dbURL + "products/" + prodID)
  }

  getOrders() {
    return this.httpClient.get<OrderService[]>(this.dbURL + "orders");
  }

  deleteOrder(orderID:number) {
    return this.httpClient.delete<OrderService>(this.dbURL + "orders/" + orderID)
  }

  saveOrder(order:OrderService) {
    return this.httpClient.post(this.dbURL + "orders", order)
  }

}
