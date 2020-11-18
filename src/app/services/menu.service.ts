import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuUrl = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  getAllMenu() {
    return this.httpClient.get<{ message: string, menu: any }>(`${this.menuUrl}/allMenu`)
  }

  getByIdMenu(id: number) {
    return this.httpClient.get<{ message: string, menu: any }>(`${this.menuUrl}/allMenu ${id}`)
  }

  deleteMenu(id: number) {
    return this.httpClient.delete(`${this.menuUrl}/deleteMenu/${id}`)
  }
  addMenu(menu: any) {
    return this.httpClient.post(`${this.menuUrl}/addMenu`, menu);
  }

  editMenu(menu: any) {
    return this.httpClient.put<{ message: string }>(`${this.menuUrl}/editMenu/${menu.id}`, menu)
  }





}
