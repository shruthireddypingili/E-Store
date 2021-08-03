import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  product: Product = new Product();


  productList: Array<Product> = [];

  constructor(private _productService: ProductService, 
    private _router: Router) { }

  ngOnInit(): void {
    this.getAllProd();
  }

  getAllProd(){
    this._productService.getAllProducts().subscribe(result => this.productList = result.products);

    
  }

  addProd(){
    this._productService.addProduct(this.product).subscribe(result => this.product = result);
    this._router.navigate(['/products'])
    console.log(this.product)
  }

  deleteProd(id){

   
    this._productService.deleteProduct(id).subscribe(result=> this.product = result.product);
    alert("Product is deleted Successfully");

    setTimeout(()=>{
      window.location.reload();
    }, 10)


  }


}
