import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {
  }

  addProd(){
    this._productService.addProduct(this.product).subscribe(result => this.product = result);
    this._router.navigate(['/products'])
  }

}
