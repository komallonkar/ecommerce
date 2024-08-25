import { Component } from '@angular/core';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { AddToCartService } from './../add-to-cart.service';
import { Product } from './../product.model';
import { SidebarNavService } from './../sidebar-nav.service';
const storage_key = "cartItem";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public item: Product[] = [];
  cartItem = 0;
  faCartShopping = faCartShopping;
  faBars = faBars;
  cartlist: string = '/cart';
  constructor(private SidebarNavService: SidebarNavService,
    private AddToCartService: AddToCartService
    ) { }
  toggleSidebar() {
   
    this.SidebarNavService.toggle();
  }
  ngOnInit() { 
    this.AddToCartService.item$.subscribe(count => {
      this.cartItem = count;
    })

  }
  
 
}
