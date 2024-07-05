import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { MyCustomPipePipe } from './my-custom-pipe.pipe';
import { CharacterLimitPipe } from './character-limit.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductsComponent,
    MyCustomPipePipe,
    CharacterLimitPipe,
    ProductDetailComponent,
    StarRatingComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
