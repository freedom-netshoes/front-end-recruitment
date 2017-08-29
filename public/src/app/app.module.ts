import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CheckoutModule } from './checkout/checkout.module';
import { SharedModule } from './shared/shared.module';

import { ProductService } from './services/products.service';
import { CartService } from './services/cart.service';
import { cartReducer } from './state-management/reducers/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    CheckoutModule,
    SharedModule,
    StoreModule.provideStore({ cartReducer: cartReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterModule.forRoot([])
  ],
  providers: [
    ProductService,
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
