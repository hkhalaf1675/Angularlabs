import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarCompenent } from './Components/NavbarComponent/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductcardComponent } from './Components/productcard/productcard.component';
import { SliderComponent } from './Components/slider/slider.component';
import { ImageshowComponent } from './Components/imageshow/imageshow.component';
import { TodolistComponent } from './Components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarCompenent,
    FooterComponent,
    ProductsComponent,
    ProductcardComponent,
    SliderComponent,
    ImageshowComponent,
    TodolistComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
