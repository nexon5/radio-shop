import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componets/UI/header/header.component';
import { FooterComponent } from './componets/UI/footer/footer.component';
import { NotFoundComponent } from './componets/UI/not-found/not-found.component';
import { DialogComponent } from './componets/UI/dialog/dialog.component';
import { ProductsComponent } from './componets/products/products.component';
import { ProductComponent } from './componets/product/product.component';
import { BasketComponent } from './componets/basket/basket.component';
import { MainComponent } from './componets/main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DialogComponent,
    ProductsComponent,
    ProductComponent,
    BasketComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
