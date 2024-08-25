import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

const storage_key = "cartItem";
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  public item: Product[] = [];
  private cartItemSubject = new BehaviorSubject<number>(this.getCartCount());
  item$ = this.cartItemSubject.asObservable();
  // public cartLength = 0;
  constructor() { }
  ngOnInit() {
    this.loadCart();
  }
  saveToCart() {
    localStorage.setItem(storage_key, JSON.stringify(this.item));
   this.loadCart();
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
      this.item = JSON.parse(storedItems);
      this.cartItemSubject.next(this.item.length);
    }
    // this.cartLength = this.item.length;
   
    
    
    return this.item;
  }
  getCartCount(): number {
   return this.item.length;
  }
}
