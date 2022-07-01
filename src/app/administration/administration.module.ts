import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrdersManagerComponent } from './orders-manager/orders-manager.component';
import { ProductsManagerComponent } from './products-manager/products-manager.component';
import { HomeComponent } from './home/home.component';
import { ModelModule } from '../model/model.module';

const routes:Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent,
    children: [
      { path: "products-manager", component: ProductsManagerComponent },
      { path: "orders-manager", component: OrdersManagerComponent }
    ]
  },
  { path: "**", redirectTo: "login"}
]

@NgModule({
  declarations: [
    LoginComponent,
    OrdersManagerComponent,
    ProductsManagerComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    ModelModule,
    ReactiveFormsModule,
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class AdministrationModule { }
