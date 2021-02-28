import { Status } from './../enums/status.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  addMenu(menu: any, image: File) {
    let formData = new FormData();
    formData.append('name', menu.name);
    formData.append('category', menu.category);
    formData.append('ingredient', menu.ingredient);
    formData.append('price', menu.price);
    formData.append('img', image);
    formData.append('status', Status.NEW);
    formData.append('verif',JSON.parse(localStorage.getItem('verif')));
    formData.append('userId', JSON.parse(localStorage.getItem('userId')));
  
    return this.httpClient.post<{ message: string }>(`${this.menuUrl}/addMenu`, formData);

  }
  editMenu(id, menu, image: File): Observable<any> {
    let formData = new FormData();
    formData.append('name', menu.name);
    formData.append('price', menu.price);
    formData.append('ingredient', menu.ingredient);
    formData.append('category', menu.category);
    if (image) {
      formData.append('img', image);
    }
   
  

    return this.httpClient.put(`${this.menuUrl}/editMenu/${id}`, formData, menu);
  }

  editMenuById(id, menu): Observable<any> {
    return this.httpClient.put(`${this.menuUrl}/editMenu/${id}`, menu);
  }





}
