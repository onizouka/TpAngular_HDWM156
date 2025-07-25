import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUserLogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  login(user: IUserLogin): Observable<any> {
    return this.http.post(this.loginUrl, user);
  }
}
