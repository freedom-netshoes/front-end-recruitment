import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() title: string;

  @Input() image: string;

  @Input() price: number;

  @Input() installments: number;

  @Input() amount?: number;

  @Input() isFreeShipping?: boolean;

  @Input() subtotal?: number;

  @Input() removeCartItem: false;

  @Input() activeBag = false;

  @Input() activeCheckout = false;

  @Output() onClickChange = new EventEmitter();

  @Output() onClickOneChange = new EventEmitter();

  onClick($event) {
    this.onClickChange.emit({
      $event: $event
    });
  }

  onClickOne($event) {
    this.onClickOneChange.emit({
      $event: $event
    });
  }

}
