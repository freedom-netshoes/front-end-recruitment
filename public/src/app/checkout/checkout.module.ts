import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'checkout', component: CheckoutComponent },
    ])
  ],
  declarations: [
   CheckoutComponent,
  ],
  providers: []
})
export class CheckoutModule { }
