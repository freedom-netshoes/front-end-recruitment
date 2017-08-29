import { Component, Input, DoCheck } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-amount-badge',
  templateUrl: './amount-badge.component.html',
  styleUrls: ['./amount-badge.component.scss']
})
export class AmountBadgeComponent implements DoCheck {

  amountTotal: number;

  @Input() cartListItems;

  constructor(
    private cartService: CartService,
  ) { }

  ngDoCheck() {
    this.amountTotal = this.cartService.getTotalAmount(this.cartListItems);
  }

  onOpenBag() {
    document.querySelector('.bag').classList.add('is-open');
  }

}
