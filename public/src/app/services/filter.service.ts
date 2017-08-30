import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  constructor() { }

  setFilter(array, orientation, atribute) {

    switch (orientation) {
      case 'cres': {
        array.sort(function(a, b) {
          if (a[atribute] < b[atribute]) {
            return -1;
          } else if (a[atribute] > b[atribute]) {
            return 1;
          } else {
            return 0;
          }
        });
        return array;
      }

      case 'desc': {
        array.sort(function(a, b) {
          if (a[atribute] > b[atribute]) {
            return -1;
          } else if (a[atribute] < b[atribute]) {
            return 1;
          } else {
            return 0;
          }
        });
        return array;
      }

      default:
        return array;
    }
  }

}

