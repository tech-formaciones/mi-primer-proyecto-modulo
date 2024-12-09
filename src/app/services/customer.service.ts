import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://angular-backend.azurewebsites.net/customers';
  private headers =  new HttpHeaders({
    'Content-Type': 'application/json',    
    'apikey': '1234567890.'
  });

  constructor(private http: HttpClient) { }
  
}
