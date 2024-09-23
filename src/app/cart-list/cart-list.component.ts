import { Component } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  listitems: any;
  constructor(private cartList: AddToCartService) { }
  ngOnInit() {
 
    this.listitems = this.cartList.loadCart();
    // console.log(this.listitems);

  }
  updateQualityCount(quantityLabel: HTMLLabelElement, change: number) {
    let currentValue = parseInt(quantityLabel.textContent || '0', 10)
    let newValue = currentValue + change;
    if (newValue < 0) {
      newValue = 0;
    } else if (newValue > 10) {
      newValue = 10;
    }
   
    quantityLabel.textContent = newValue.toString();
    
  }
}
