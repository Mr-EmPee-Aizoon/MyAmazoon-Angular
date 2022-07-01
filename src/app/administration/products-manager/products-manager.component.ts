import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from 'src/app/model/repo/product-repository.service';

@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html',
  styleUrls: ['./products-manager.component.css']
})
export class ProductsManagerComponent {

  constructor(
    private productsManager:ProductRepositoryService
  ) {

  }

  get products() {
    return this.productsManager.getProducts();
  }

  removeProduct(prodID:number|undefined) {
    if(prodID) {
      this.productsManager.deleteProduct(prodID);
    }
  }

}
