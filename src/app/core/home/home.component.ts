import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { CartManagerService } from 'src/app/model/cart/cart-manager.service';
import { ProductRepositoryService } from 'src/app/model/repo/product-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public selectedCategory = "";

  get products() {
    if(this.selectedCategory == "") {
      return this.productRepo.getProducts();
    } else {
      return this.productRepo.getProductsByCategory(this.selectedCategory);
    }
  }

  private cart:Cart;

  constructor(
    private productRepo:ProductRepositoryService,
    cartManager:CartManagerService
  ) {
    this.cart = cartManager.getCart("default")
  }

  get categories() {
    return this.productRepo.getCategories();
  }

  addProductToCart(productID:number) {
    let product = this.productRepo.getProductByID(productID);
    if(product != undefined) {
      this.cart.addProduct(product);
    }
  }

  removeProductFromCart(productID:number) {
    let product = this.productRepo.getProductByID(productID);
    if(product) {
      this.cart.removeProduct(product)
    }
  }

  cartContainsProduct(prodID:number) {
    return this.cart.containsItem(prodID);
  }

}
