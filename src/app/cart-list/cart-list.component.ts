import { Component } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';

const storage_key = "cartItem";
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  listitems: any;
  total: number=0;

  constructor(private cartList: AddToCartService) { }
  ngOnInit() {
 
    this.listitems = this.cartList.loadCart();
    
    this.cartTotal(this.listitems);
    // console.log(this.listitems);

  }
  updateQualityCount(quantityLabel: HTMLLabelElement, change: number,itemPrice:HTMLElement, totalItemPrice:HTMLElement,itemID:number) {
    let currentValue = parseInt(quantityLabel.textContent || '0', 10)
    let newValue = currentValue + change;
    let currentPrice = parseFloat(itemPrice.textContent || '0');
    let newPrice = currentPrice * newValue;
    if (newValue < 0) {
      newValue = 0;
      newPrice = currentPrice;
    } else if (newValue > 10) {
      newValue = 10;
    }
   
    quantityLabel.textContent = newValue.toString();
    totalItemPrice.textContent = newPrice.toFixed(2);
    this.updateLocalStorage(itemID, newValue, newPrice);
    
  }
  updateLocalStorage(itemID: number,quantity:number,price:number) {
    // console.log(itemID);
    let cartItem = localStorage.getItem(storage_key);
    if (cartItem) { 
      let cart = JSON.parse(cartItem);
      // console.log(cart);
      cart = cart.map((item: any) => {
        if (itemID == item.id) {
          item.quantity = quantity;
          item.totalPrice = price;
        }
        return item;
      })
      localStorage.setItem(storage_key, JSON.stringify(cart));
      this.cartTotal(cart);
    }
  }
  cartTotal(cart: any) {
    this.total = 0;
    cart.map((item: any) => {
      this.total += item.totalPrice;
      return this.total;
      })
    
  }
}
