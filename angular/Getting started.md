## New project

``` bash
ng new app --ssr false --routing true --style scss
```

## Run project

```bash
npm start
```

## Add component
```bash
ng g c home
ng generate component home
```
## Set prefix for tags

```json
// angular.json
"projects": { "prefix": "tahh", ....
```

## Static assets
```json
// angular.json
"projects":{ "architect": { "options": { "assets": ["src/assets"]
```
Place static assets (img, etc) ian src/app/assets/
```html
<img src="/assets/images/heor-banner.png" alt="Hero banner"/>
```

```src/app/assets/
```
## Move from relative paths to @your-path alias

https://jacobneterer.medium.com/import-via-absolute-paths-in-angular-fc4146bf2330

```ts
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Go from:
import { HomeComponent } from './home/home.component '
// To:
import { HomeComponent } from '@app/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'app';
}
```

Add baseUrl and paths to your `tsconfig.js`

```json
  //tsconfig.json
  "compilerOptions": {
    "baseUrl": "./",
     "paths":{
      "@app/*":["./src/app/*"],
      "@shared/*":["./src/shared/*"]
     },
```