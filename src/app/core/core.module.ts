import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModelModule } from '../model/model.module';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart-summary/cart.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CartComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule
  ]
})
export class CoreModule { }
