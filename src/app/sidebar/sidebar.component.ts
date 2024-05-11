import { Component } from '@angular/core';
import { ProductListingService } from '../product-listing.service';
import { SidebarNavService } from './../sidebar-nav.service';
import { FilterProductsService } from '../filter-products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarOpen: boolean = false;
  products: any;
  uniqueCategories: any;
  constructor(private SidebarNavService: SidebarNavService,
    private _sharedService: ProductListingService,
    private _filterProductsService: FilterProductsService) {
  
  }
  ngOnInit() {
    this.getUniqueProducts();
    this.SidebarNavService.sidebarOpen.subscribe(open => {
      this.sidebarOpen = open;
    })    
  }
  
  getUniqueProducts() {
    this._sharedService.getProducts().subscribe((result: any) => {
      this.products = result;
       this.uniqueCategories = [...new Set(this.products.map((product: { category: any; }) => product.category))];
        // console.log(uniqueCategories);
    })
  }
  selectCategory(category: string) {
    this._filterProductsService.updateCategory(category);
    console.log(category);
  }
}
