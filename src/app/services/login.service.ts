import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllLogin() {
    return this.httpClient.get<{ message: string, login: any }>(`${this.loginUrl}/allLogin`);
  }

  getByIdLogin(id: number) {
    return this.httpClient.get<{ message: string, login: any }>(`${this.loginUrl}/allLogin/${id}`);
  }
  deleteLogin(id: number) {
    return this.httpClient.delete(`${this.loginUrl}/deleteLogin/${id}`);
  }
  addLogin(login: any) {
    return this.httpClient.post<{ message: string, userType: string }>(`${this.loginUrl}/addLogin`, login);
  }
  editLogin(login: any) {
    return this.httpClient.put<{ message: string }>(`${this.loginUrl}/editLogin/${login.id}`, login)
  }





}
