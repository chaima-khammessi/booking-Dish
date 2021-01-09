import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class adminService {

  adminUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllAdmin() {
    return this.httpClient.get<{ message: string, admin: any }>(`${this.adminUrl}/allAdmin`);
  }

  getByIdAdmin(id: number) {
    return this.httpClient.get<{ message: string, admin: any }>(`${this.adminUrl}/allAdmin/${id}`);
  }
  deleteAdmin(id: number) {
    return this.httpClient.delete(`${this.adminUrl}/deleteAdmin/${id}`);
  }
  addAdmin(admin: any) {
    return this.httpClient.post<{ message: string, admin: string }>(`${this.adminUrl}/addAdmin`, admin);
  }
  editAdmin(admin: any) {
    return this.httpClient.put<{ message: string }>(`${this.adminUrl}/editAdmin/${admin.id}`, admin)
  }

  loginAdmin(admin: any) {
    return this.httpClient.post<{ message: string, admin: string }>(`${this.adminUrl}/addLoginAdmin`, admin);
  }
  logoutAdmin() {
    return this.httpClient.get<{ message: string }>(`${this.adminUrl}/logoutAdmin`)
  }



}
