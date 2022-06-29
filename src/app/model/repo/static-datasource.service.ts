import { Injectable } from '@angular/core';
import { ModelModule } from '../model.module';

@Injectable({
  providedIn: ModelModule
})
export class StaticDatasourceService {

  private products = [

    { id: 1, "title": "Galaxy S10", "description": "4 GB RAM   64 GB ROM, Grigio", "category": "SMARTPHONE", "price": 450.5 },
    { id: 2, "title": "Inspiron 5000", "description": "2 in 1, 16 GB RAM   256 GB SSD", "category": "LAPTOP", "price": 999.99 }

  ];

  constructor() { }

  getProducts() {
    return Array.from(this.products);
  }

}
