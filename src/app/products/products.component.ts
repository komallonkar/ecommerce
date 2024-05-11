import { Component } from '@angular/core';
import { FilterProductsService } from '../filter-products.service';
import { ProductListingService } from '../product-listing.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allproducts: any;
  products: any;
  newProducts: any;
  categorySubscription: any;
  constructor(private _sharedService: ProductListingService,
    private getFiltredProducts: FilterProductsService
  ) { }
  ngOnInit() {
    this.productList();
    this.categorySubscription = this.getFiltredProducts.selectedService$.subscribe(category => {
      this.filterProductsByCategory(category);
    })
  }
    ngOnDestroy() {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }
  productList() {
    this._sharedService.getProducts().subscribe((res) => {
      this.allproducts = res;
      this.products = [...this.allproducts]
      // console.log(this.products);
    })
  }
filterProductsByCategory(category: string) {
  console.log('Selected category:', category);
  if (category === 'All') {
     this.products = [...this.allproducts];
  } else {
    console.log('Filtering products by category:', category);
    this.products = this.allproducts.filter((product: { category: string }) => product.category === category);
    console.log(this.products);
  }
}

}
