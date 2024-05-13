import { Injectable } from '@angular/core';
import { IProduct } from './product/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];
  constructor() { }

  add(product: IProduct){
    this.cart.push(product);
    console.log(`product ${product.name} added to the cart`);
  }
}