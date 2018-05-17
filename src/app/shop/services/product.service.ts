import { Injectable } from '@angular/core';
import {Product} from '../domain/product';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ProductService {
  products = [
    new Product('Eggs', 1.25, 10),
    new Product('Milk', 1, 5)
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}


