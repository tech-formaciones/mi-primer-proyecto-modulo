import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://angular-backend.azurewebsites.net/customers';
  private headers =  new HttpHeaders({
    'Content-Type': 'application/json',    
    'apikey': '1234567890.'
  });

  constructor(private http: HttpClient, private core: CoreService) { }

  getCustomers(company: string = '', city: string = '', country: string = ''): Observable<Array<Customer>> {
    let params: string = '';

    if(!this.core.isNullOrEmpty(company))
      params += (params === '' ? '?' : '&') + `company=${company}`;

    if(!this.core.isNullOrEmpty(city))
      params += (params === '' ? '?' : '&') + `city=${city}`;

    if(!this.core.isNullOrEmpty(country))
      params += (params === '' ? '?' : '&') + `company=${country}`;

    return this.http.get<Array<Customer>>(this.apiUrl + params, { headers: this.headers });
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }



}
