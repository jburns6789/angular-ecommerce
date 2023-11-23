import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http'; // part of angular framework needs to be added
import { ProductService } from './services/product.service'; //needs to be added

import { Routes, RouterModule} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';

// define and configure routes

const routes: Routes =[
    //order is important most specific -> most general

      {path: 'checkout', component: CheckoutComponent},
      {path: 'cart-details', component: CartDetailsComponent},
      {path: 'products/:id', component: ProductDetailsComponent},
      {path: 'search/:keyword', component: ProductListComponent},
      {path: 'category/:id', component: ProductListComponent},
      {path: 'category', component: ProductListComponent},
      {path: 'products', component: ProductListComponent},
      {path: '', redirectTo: '/products', pathMatch: 'full'},
      {path: '**', redirectTo: '/products', pathMatch: 'full'}
    
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes), // routes from the const routes goes here
    BrowserModule,
    HttpClientModule, //needs to be added for api support
    NgbModule, // necessary to support ng bootstrap, exposes the exported delclarations
    ReactiveFormsModule
  ],
  providers: [ProductService], // add reference to product service
  bootstrap: [AppComponent]
})
export class AppModule { }
