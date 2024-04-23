import { Component } from '@angular/core';
import { CartService } from '@app/cart.service';
import { IProduct } from '@app/product/product.model';

@Component({
  selector: 'tahh-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: any;
  filter: string = '';

  constructor(private cartService: CartService) {
  }

  // !NB! LIMITS TESTING: private cartService: CartService = inject(CartService); // Limits testing

  addToCart(product: IProduct) {
      this.cartService.add(product);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product: any) => product.category === this.filter);
  }

}
