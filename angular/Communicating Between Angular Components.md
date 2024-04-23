## Communicating with Child Components Using Inputs


```html
<ul class="products">
	<li class="product-item" *ngFor="let product of getFilteredProducts()">
		<tahh-product-details [product]="product"></tahh-product-details>
	</li>
</ul>
```

```ts
//product-details.component.ts
import { .., Input } from '@angular/core';

export class ProductDetailsComponent {
	@Input() product!: IProduct;
	....
}

```
## Communicating with Parent Components Using Outputs

```html
<!-- product-details.component.html -->
<button class="buy-btn" (click)="buyButtonClicked(product)">Buy</button>
```


```ts
//product-details.component.ts
import {.., EventEmitter, Output } from '@angular/core';

export class ProductDetailsComponent {
	@Output buy = new EventEmitter();

	buyButtonClicked(product: IProduct){
		this.buy.emit(); // You could parse the data here like: this.buy.emit(product);
	}
	....
}
```

```html
<!-- catalog.component.html -->

<div class="container">
	<div class="filters">
		<a class="button" (click)="filter = 'Heads'"
	</div>
</div>

<div class="products">
	<li class="product-item" *ngFor="let product of getFilteredProducts()">
		<!-- (buy) is the event on the child component -->
		<tahh-product-details [product]="product" (buy)=addToCard(product) ></tahh-product-details>
	</li>
</div>

```

