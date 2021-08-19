import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  constructor(protected http: HttpClient) {}

  getValues(): Observable<Test[]> {
    let url = 'https://api.npoint.io/44936f3b9c03eedeb2dc';
    return this.http.get<Test[]>(url);
  }
}
