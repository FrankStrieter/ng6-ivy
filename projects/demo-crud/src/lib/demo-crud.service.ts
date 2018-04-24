import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoCrudService {
  constructor(private http: HttpClient) {}

  read<T>(url: string): Observable<T> {
    return this.http.get(url).pipe(map(request => <T>request));
  }
  create<T>(url: string, payload: {}): Observable<T> {
    return this.http.post(url, payload).pipe(map(request => <T>request));
  }
  update<T>(url: string, payload: {}): Observable<T> {
    return this.http.put(url, payload).pipe(map(request => <T>request));
  }
  delete<T>(url: string, identifier: string): Observable<T> {
    return this.http.delete(`/${identifier}`).pipe(map(request => <T>request));
  }
}
