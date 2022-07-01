import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './model/Category';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('https://fakestoreapi.com/products/categories');
  }

  getProducts(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products/category/' + category);
  }
}
