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

  }
}
