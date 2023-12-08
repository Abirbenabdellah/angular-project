import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {NewProductsComponent} from "./new-products/new-products.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "products", component: ProductComponent},
  {path: "newProduct", component: NewProductsComponent},
  {path: "editProduct/:id", component: EditProductComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
