import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { PRODUCTS } from '../mocks/products.mock';
import { IProducts } from '../interfaces/products';

@Injectable()
export class ProductService {
  constructor(private _http: Http) { }

  getProducts(): Observable<IProducts[]> {
    return Observable.of(PRODUCTS);
  }

}
