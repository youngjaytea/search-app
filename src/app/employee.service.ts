import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://reqres.in/api/users?page=2'

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
