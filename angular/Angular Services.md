`Services is singleton by default`

__Please don't put display logic in the service - or else total :'(__

Add a service to root application folder. In this case the application is named `app` so the files are added directly in this folder

```terminal
/workspaces/angular-playground/simple-001/app # ng g s YOUR-NICE-SERVICE-NAME
```

```folder
src/app
		...
		app.routes.ts
		...
		app.routes.spec.ts // Added
		cart.service.ts // Added
		..
```





