import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './core/cart/cart-details/cart-details.component';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [

  {path: "home", component: HomeComponent},
  {path: "cart", component: CartDetailsComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "**", redirectTo: "/home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
