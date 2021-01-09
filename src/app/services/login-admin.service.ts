import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  loginAdminUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllAdminLogin() {
    return this.httpClient.get<{ message: string, loginAdmin: any }>(`${this.loginAdminUrl}/allAdminLogin`);
  }
  getAdminLoginById(id: number) {
    return this.httpClient.get<{ message: string, loginAdmin: any }>(`${this.loginAdminUrl}/allAdminLogin/${id}`);
  }
  deleteAdminLogin(id: number) {
    return this.httpClient.delete(`${this.loginAdminUrl}/allAdminLogin/${id}`);
  }
  addAdminLogin(loginAdmin: any) {
    return this.httpClient.post(`${this.loginAdminUrl}/allAdminLogin`, loginAdmin);

  }
  editAdminLogin(loginAdmin: any) {
    return this.httpClient.put<{ message: string }>(`${this.loginAdminUrl}/allAdminLogin/${loginAdmin.id}`, loginAdmin);
  }




}
