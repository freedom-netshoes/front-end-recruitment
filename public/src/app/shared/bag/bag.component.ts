import { Component, Input, DoCheck, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Cart } from '../../state-management/state/cart.state';
import { REMOVE_TO_CART } from '../../state-management/actions/cart.actions';
import { CartService } from '../../services/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements DoCheck {

  amountTotal: number;
  @Input() cartListItems;

  constructor(
    private store: Store<Cart>,
    private el: ElementRef,
    private cartService: CartService,
    private router: Router,
  ) { }

  ngDoCheck() {
    this.amountTotal = this.cartService.getTotalAmount(this.cartListItems);
  }
  onRemoveCartItem(payload) {
    this.store.dispatch({ type: REMOVE_TO_CART, payload: { products: payload } });
  }

  onCloseBag() {
    this.el.nativeElement.querySelector('.is-open').classList.remove('is-open');
  }

  onFinalizeBuy() {
    this.router.navigate(['/checkout']);
  }

}
