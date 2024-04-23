## Class binding

`ngClass` will combine the static applied class with the dynamically applied class

Using Expressions with inline code

```html
<div class="bold" [ngClass]="{ strikethrough: product.discount > 0 }">
</div>
```

Using Expressions calling a function

```html
<div [ngClass]="getDiscountedClasses(product)"
</div>
```

```ts
getDiscountedClasses(product: IProduct){
	if(product.discount > 0)
		return ["strikethrough"];
	return [];
}
```

Also legal but wont work for more complex cases

```html
<div [class.strikethrough]="product.discount > 0">
	{{ product.price | currency:"USD" }}
</div>

```

## Style Binding

```html
<div
	 [style.color="'red'"]
	 [ngClass]="getDiscountedClasses(product)">
</div>
```
```html
<div
	[style.color]="product.dicount > 0 ? 'red' : '' "
```

Using `ngStyle` setting multiple attributes

```html
<div [ngStyle]="{ color: product.discount > 0 ? 'red' : '', height: ... }"
```