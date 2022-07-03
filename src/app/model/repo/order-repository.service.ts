import { Injectable } from '@angular/core';
import { Cart } from '../cart/cart';
import { ModelModule } from '../model.module';
import { OrderService } from '../order.service';
import { RestDatasourceService } from './rest-datasource.service';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable({
  providedIn: ModelModule
})
export class OrderRepositoryService {

  constructor(
    private dataSoure:StaticDatasourceService,
  ) { }

  saveOrder(order:OrderService) {
    return this.dataSoure.saveOrder(order);
  }

  deleteOrder(orderID:number) {
    return this.dataSoure.deleteOrder(orderID);
  }

  getOrders() {
    return this.dataSoure.getOrders();
  }

}
