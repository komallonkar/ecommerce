import { SidebarNavService } from './../sidebar-nav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private SidebarNavService: SidebarNavService  ) { }
  toggleSidebar() {
   
    this.SidebarNavService.toggle();
  }
}
