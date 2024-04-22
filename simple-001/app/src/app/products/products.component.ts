import { Component } from '@angular/core';
import { IProduct } from '../product/product.model';
import { ProductComponent } from '../product/product.component'

@Component({
  selector: 'tahh-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  public products: IProduct[];
  public filter: string;

  constructor() {
    this.products = [{
      id: 2
      , description: "Hello world"
      , name: "Nice Product"
      , imageName: "nice-product.png"
      , category: "imaginary"
      , price: 999.99
      , discount: 0.2,
    }
  , {
    id: 3
    , description: "Contains null values"
    , name: "null"
    , imageName: "null"
    , category: undefined
    , price: 99
    , discount:1
  }
  , {
    id: 1
    , description: "Off with your head!"
    , name:"Head"
    , imageName: "head image"
    , category: "Heads"
    , price: 1
    , discount: 0
  }]

    this.filter = '';
  }

  getFilteredProducts(){
    return this.filter === '' ? this.products : this.products.filter((product)=> product.category === this.filter);
  }
}
