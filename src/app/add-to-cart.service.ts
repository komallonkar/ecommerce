import { Injectable } from '@angular/core';
import { Product } from './product.model';

const storage_key = "cartItem";
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  private item: Product[] = [];
  constructor() { }
  ngOnInit() {
    this.loadCart();
  }
  saveToCart() {
    localStorage.setItem(storage_key, JSON.stringify(this.item));
  }
  addToCart(product: any) {
    this.item.push(product);
    console.log(this.item);
    this.saveToCart();
    
  }
  getCartItems() {
    return this.item;
  }
  clearCart() {
    this.item = [];
    this.saveToCart();
  }
  loadCart() {
    const storedItems = localStorage.getItem(storage_key);
    if (storedItems) {
      this.item = JSON.parse(storedItems)
    }
    return this.item;
  }
}
