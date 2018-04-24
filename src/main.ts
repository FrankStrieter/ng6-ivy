import { AppModule } from './app/app.module';
import { ɵrenderComponent as renderComponent } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

renderComponent(AppComponent);

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.log(err));
