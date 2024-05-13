Only simple expressions

```angular
<h1>2 + 2 = {{ 2+2 }}</h1> // OK
<h1>2 + 2 = {{ Math.round(2+2) }} // FAIL :(
```
## Binding to Component Data

#attribute-binding #one-way #attribute-binding 

`[ ]` binds from the component to the template - binds to expressions and data
`( )` binds from the template to the components - binds to events and executes statements

expressions are evaluated and returns a new value
statements return no value - typically courses a change in the state
### Attribute binding

```html
<img src="{{ ... }}" alt={{product.name}}
<!--EQUALS:-->
<img src="{{ ... }} [alt]="product.name"
```

Bind to a function
```html

```
### Event bindings

Trigger a change in a component class

Bind to an event which sets a public prop in the component ts named `'filter'` using a statement

```html
<!--  -->
<div class="filters">
	<a class="button" (click)="filter='Heads' >Heads</a>
</div>
```

```plantuml

if (counter?) equals (5) then
:print 5;
else 
:print not 5;
endif

```
