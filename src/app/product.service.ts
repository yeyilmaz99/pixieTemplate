import { ProductData } from './products/products.datasource';
import { Product } from './products/products.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http:HttpClient;
  constructor() { }


  getProducts(): Observable<Product[]> {
    return of(ProductData);
  }

  getProduct(id:number): Observable<Product>{
    return of(ProductData.find(product => product.id === id));
  }
}
