import { HttpClient } from '@angular/common/http';
import { Component, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { Drink } from './models/drink';

@Component({
  selector: 'ngm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(http: HttpClient) {
    // this.data = this.http.get<Drink[]>(`http://localhost:3000`);
  }
}
