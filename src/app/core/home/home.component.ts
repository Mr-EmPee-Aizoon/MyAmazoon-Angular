import { Component, OnInit } from '@angular/core';
import { CartManagerService } from 'src/app/model/cart/cart-manager.service';
import { ProductRepositoryService } from 'src/app/model/repo/product-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public currentCategory:null|string = null;
  private cart = this.cartManager.getCart("default");

  constructor(
    private productRepo:ProductRepositoryService,
    private cartManager:CartManagerService
  ) {}

  get products() {
    if(this.currentCategory == null) {
      return this.productRepo.getProducts();
    } else {
      return this.productRepo.getProductsByCategory(this.currentCategory);
    }
  }

  get categories() {
    return this.productRepo.getCategories();
  }

  getProductsByCategory(category:string) {
    return this.productRepo.getProductsByCategory(category);
  }

  addProductToCart(productID:number) {
    let product = this.productRepo.getProductByID(productID);
    if(product != undefined) {
      this.cart.addProduct(product);
    }
  }

  removeProductFromCart(productID:number) {
    let product = this.productRepo.getProductByID(productID);
    if(product != undefined) {
      this.cart.removeProduct(product)
    }
  }

  cartContainsProduct(prodID:number) {
    return this.cart.containsProduct(prodID);
  }

}
