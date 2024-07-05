import { SidebarNavService } from './../sidebar-nav.service';
import { Component } from '@angular/core';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faCartShopping = faCartShopping;
  faBars = faBars;
  cartlist: string = '/cart';
  constructor(private SidebarNavService: SidebarNavService  ) { }
  toggleSidebar() {
   
    this.SidebarNavService.toggle();
  }
}
