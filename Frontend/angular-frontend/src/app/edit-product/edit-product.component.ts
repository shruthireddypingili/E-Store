import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product = new Product()

  id: any;

  constructor(private _productService: ProductService, 
    private _activateRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._activateRoute.snapshot.paramMap.get('id');
    
    this._productService.getProductById(this.id).subscribe(result=> this.product = result.product);
    
   
  }

  updateProduct(){
   
    this._productService.editProduct(this.product, this.id).subscribe(result => this.product = result);
    console.log(this.product);
    this._router.navigate(['/manage-products'])

    
  }

  

 
  
}
