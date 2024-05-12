import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productId: any;
  product: any;
  constructor(private route: ActivatedRoute, private productService: ProductDetailService) { }
  ngOnInit(){ 
    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(this.productId).subscribe((product) => {
      this.product = product;
    })
  }
}
