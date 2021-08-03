import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product()

  id: any;



  constructor(private _productService: ProductService, 
    private _activateRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {




    this.id = this._activateRoute.snapshot.paramMap.get('id');
    
    this._productService.getProductById(this.id).subscribe(result=> this.product = result.product);


  }

  addToCart(product){
    if(localStorage.getItem("cart")){
      let cart = JSON.parse(localStorage.getItem("cart"));
      for(let i=0; i<cart.length; i++){
        if(cart[i]._id == product._id){
          cart[i].qty++;
          console.log(cart[i]);
        }
      }
      if(cart.map(function (e){
        return e._id;
      }).indexOf(product._id) == -1){
        cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product has been added to cart!!")
    }else{
      let cart = [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product has been added to cart!!")

    }
    setTimeout(()=>{
      window.location.reload();
    }, 10)
  }

}
