import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(products: Product[], searchFilter: string): Product[] {
    if(!products || !searchFilter){
      return products;
    }
    return products.filter(product => 
      product.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !==-1);;
  }

}
