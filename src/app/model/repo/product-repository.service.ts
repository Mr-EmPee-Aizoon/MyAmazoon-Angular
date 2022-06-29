import { Injectable } from '@angular/core';
import { ModelModule } from '../model.module';
import { Product } from '../product';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable({
  providedIn: ModelModule
})
export class ProductRepositoryService {

  private products:Product[];
  private categories:string[];

  constructor( private dataSource:StaticDatasourceService ) {
    this.products = dataSource.getProducts();
    this.categories = <string[]> this.products
      .map( (product) => product.category)
      .filter( (category) => category != undefined)
      .sort();
  }

  getProducts() {
    return Array.from(this.products);
  }

  getProductByID(id:number) {
    return this.products.find(
      (product) => product.id == id
    );
  }

  getProductsByCategory(category:string) {
    return this.products.filter(
      (product) => product.category == category
      )
  }

  getCategories() {
    return Array.from(this.categories);
  }

}
