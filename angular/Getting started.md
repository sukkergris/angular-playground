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

```angular.json
"projects": { "prefix": "tahh", ....
```

## Static assets
```angular.json
"projects":{ "architect": { "options": { "assets": ["src/assets"]
```
Place static assets (img, etc) in src/app/assets/
```html
<img src="/assets/images/heor-banner.png" alt="Hero banner"/>
```

```src/app/assets/
```
