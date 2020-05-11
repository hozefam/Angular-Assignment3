import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsHomeComponent } from './Products/products-home/products-home.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductInfoComponent } from './Products/product-info/product-info.component';
import { ProductFormComponent } from './Products/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsHomeComponent,
    ProductListComponent,
    ProductInfoComponent,
    ProductFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
