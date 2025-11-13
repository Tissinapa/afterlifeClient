// USER SERVICE!!!!

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class User {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient){ }


  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/create`, user);
  }


}
