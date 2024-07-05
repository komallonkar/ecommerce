import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductListingService {
  URL = "https://fakestoreapi.com/products";
  constructor(private _http: HttpClient) { }
  getProducts() { 
    return this._http.get(this.URL);
  }
}
