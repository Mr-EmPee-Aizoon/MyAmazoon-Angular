import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectorRef, Component, Injectable, OnChanges } from '@angular/core';
import { ModelModule } from '../model.module';
import { Product } from '../product';
import { RestDatasourceService } from './rest-datasource.service';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable({
  providedIn: ModelModule
})
export class ProductRepositoryService {

  private products:Product[] = [];
  private categories:string[] = [];

  constructor(private dataSource:StaticDatasourceService ) {
    dataSource.getProducts().subscribe(
      (data) => {
        this.products = data;

        this.categories = <string[]> this.products
        .map( (product) => product.category)
        .filter( (category) => category != undefined)
        .sort();
      }
    );

  }

  deleteProduct(prodID:number) {
    let product = this.getProductByID(prodID);
    if(product) {
      this.dataSource.deleteProduct(prodID).subscribe(
        (data) => {
          this.products.splice(
            this.products.indexOf(product as Product, 1)
          )
        }
      )
    }
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
