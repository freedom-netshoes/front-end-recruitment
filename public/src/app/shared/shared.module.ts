import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemComponent } from './product-item/product-item.component';
import { BagComponent } from './bag/bag.component';
import { TotalComponent } from './total/total.component';
import { AmountBadgeComponent } from './amount-badge/amount-badge.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductItemComponent,
    BagComponent,
    TotalComponent,
    AmountBadgeComponent,
  ],
  exports: [
    ProductItemComponent,
    BagComponent,
    TotalComponent,
    AmountBadgeComponent,
  ]
})
export class SharedModule { }
