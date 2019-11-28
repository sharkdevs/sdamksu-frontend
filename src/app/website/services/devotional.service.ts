import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevotionalService {
  constructor(private http: HttpClient) { }

  getQuaterly() {
    return this.http.get(environment.api_url_quarterly,);
  }
}
