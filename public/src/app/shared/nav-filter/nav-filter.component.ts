import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FilterService } from "../../services/filter.service";

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.scss']
})
export class NavFilterComponent {

  @Input() list: any;
  @Input() order: string;
  @Input() atribute: string;
  @Output() onClickChange = new EventEmitter();

  constructor(
    private filterService: FilterService,
    private el: ElementRef
  ) { }

  onClick($event, order, atribute) {
    if (this.el.nativeElement.querySelector('.button[disabled]')) {
      this.el.nativeElement.querySelector('.button[disabled]').removeAttribute('disabled');
    }
    $event.target.setAttribute('disabled', 'disabled');
    this.sendEvent($event, order, atribute);
  }

  callFilter(order, atribute) {
    let newObj;
    newObj = Object.assign([], this.list);
    this.list = this.filterService.setFilter(newObj, order, atribute);
    return this.list;
  }

  sendEvent($event, order, atribute) {
    this.onClickChange.emit({
      $event: $event,
      list: this.callFilter(order, atribute),
    });
  }
}
