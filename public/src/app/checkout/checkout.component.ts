import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

import { Store } from '@ngrx/store';
import { Cart} from '../state-management/state/cart.state';
import { REMOVE_TO_CART } from '../state-management/actions/cart.actions';
import { IProducts } from '../interfaces/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartListItems: any;
  // cartListItems: Array<IProducts>;
  valueTotal = 0;

  constructor(
    private store: Store<Cart>,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.store.select('cartReducer').subscribe((state: any) => {
      this.cartListItems = state.products;
    });
  }

  onRemoveCartItem(payload) {
    this.store.dispatch({ type: REMOVE_TO_CART, payload: { products: payload } });
    this.valueTotal = this.cartService.setUpdateTotal(this.valueTotal, payload);
  }

}
