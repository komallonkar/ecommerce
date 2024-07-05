import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartListComponent },
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
