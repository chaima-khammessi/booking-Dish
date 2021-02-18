import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampanyService {
companyUrl = 'http://localhost:3000'

  constructor(private httpClient:HttpClient) { }

  getAllCompany() {
    return this.httpClient.get<{ message: string, Company: any }>(`${this.companyUrl}/allCompany`)
  }

  getByIdCompany(id: number) {
    return this.httpClient.get<{ message: string, Company: any }>(`${this.companyUrl}allCompany${id}`)
  }

  deleteCompany(id: number) {
    return this.httpClient.delete(`${this.companyUrl}/deleteCompany/${id}`)
  }
  addCompany(Company: any) {
    return this.httpClient.post(`${this.companyUrl}/addCompany`, Company);
  }

  editCompany(Company: any) {
    return this.httpClient.put<{ message: string }>(`${this.companyUrl}/editCompany/${Company.id}`, Company)
  }

  login(company: any) {
    console.log('copany in service', company);

    return this.httpClient.post<{ message: string, userType: string,companyId: string, token: any }>(`${this.companyUrl}/addLogin`, company);

  }


  logoutCompany() {
    return this.httpClient.get<{ message: string }>(`${this.companyUrl}/logoutCompany`)
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
