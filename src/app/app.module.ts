import { NgModule, ɵrenderComponent as renderCompenent } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoCrudModule } from 'demo-crud';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
