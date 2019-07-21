import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ResponseObject {
  success: boolean;
  user: object;
  message: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post('http://localhost:5000/auth/login', {email: email, password: password});
  }

  register(name, surname, email, password) {
    return this.http.post('http://localhost:5000/auth/register', {name: name, surname: surname, email: email, password: password, role: "guest"});
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

}