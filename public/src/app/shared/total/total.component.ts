import { Component, Input, DoCheck } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements DoCheck {

  total = 0;

  @Input() cartListItems;

  @Input() installments = 10;


  constructor(
    private cartService: CartService,
  ) { }
  ngDoCheck() {
    this.total = this.cartService.getCartTotal(this.total, this.cartListItems);
  }
}
