import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DemoCrudService } from './demo-crud.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [{provide: DemoCrudService, useClass: DemoCrudService}],
})
export class DemoCrudModule {}
