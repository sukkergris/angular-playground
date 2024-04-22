import { Component } from '@angular/core';
import { IProduct } from './product.model'

@Component({
  selector: 'tahh-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {
  public product: IProduct;
  constructor(){
    this.product = {
      id: -999999
      , description: "Pre initialize product container"
      , name: 'Empty product pre initializing'
      , imageName: "empty-product.png"
      , category: "PreInitializeing"
      , price: 0.0
      , discount: 0.0
      ,
    }
  }
  public getImageUrl(product: IProduct){
    return `/assets/products/${product.imageName}`;
  }
}
