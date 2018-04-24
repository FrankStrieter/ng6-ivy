#THIS IS NOT WORKING AS ESPECTED

Steps to reproduce the issue:
- install dependencies `yarn`
- build the app `npm run build`
- start http-server `npx http-server ./dist` and navigate to the given address
- open chrome developer tools

Error:  

```
Uncaught Error: Injector: NOT_FOUND [HttpClient]
    at inject (vendor.dfcef21a1db564434382.js:10641)
    at getOrCreateInjectable (vendor.dfcef21a1db564434382.js:28160)
    at Object.directiveInject (vendor.dfcef21a1db564434382.js:28003)
    at Object.AppComponent_Factory [as factory] (main.c5f0c1bb127672050575.js:46)
    at renderComponent (vendor.dfcef21a1db564434382.js:27784)
    at Object../src/main.ts (main.c5f0c1bb127672050575.js:66)
    at __webpack_require__ (runtime.992f46d7ae7a5557bff7.js:75)
    at Object.0 (main.c5f0c1bb127672050575.js:81)
    at __webpack_require__ (runtime.992f46d7ae7a5557bff7.js:75)
    at checkDeferredModules (runtime.992f46d7ae7a5557bff7.js:44)
```

# Ng6Meetup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
