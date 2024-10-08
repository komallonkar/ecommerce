import { Component } from '@angular/core';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { AddToCartService } from '../add-to-cart.service';
import { FilterProductsService } from '../filter-products.service';
import { ProductListingService } from '../product-listing.service';
const storage_key = "cartItem";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  allproducts: any;
  products: any;
  newProducts: any;
  categorySubscription: any;
  faIndianRupeeSign = faIndianRupeeSign;
  addedProductsID: Set<number> = new Set();
  constructor(
    private _sharedService: ProductListingService,
    private getFiltredProducts: FilterProductsService,
    private addCart: AddToCartService
  ) {}
  ngOnInit() {
    this.productList();
    this.categorySubscription =
      this.getFiltredProducts.selectedService$.subscribe((category) => {
        this.filterProductsByCategory(category);
      });
  }
  ngOnDestroy() {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }
  productList() {
    this._sharedService.getProducts().subscribe((res) => {
      this.allproducts = res;
      this.products = [...this.allproducts];
      console.log(this.allproducts);
    });
  }
  filterProductsByCategory(category: string) {
    console.log('Selected category:', category);
    if (category === 'all') {
      this.products = [...this.allproducts];
    } else {
      console.log('Filtering products by category:', category);
      this.products = this.allproducts.filter(
        (product: { category: string }) => product.category === category
      );
      console.log(this.products);
    }
  }
  addToCart(product: any) {
    console.log(product);
    this.addCart.addToCart(product);
    this.addedProductsID.add(product.id);
    console.log(this.addedProductsID);
  }
  isProductAdded(product: any): boolean {
    return this.addedProductsID.has(product.id);
    
  }
}
