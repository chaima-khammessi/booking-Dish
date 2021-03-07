import { HomeMenu } from './../model/home-menu.model';
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
  getAllUserMenus(userId: String) {
    return this.httpClient.get<{ message: string, menu: any }>(`${this.menuUrl}/allUserMenus/${userId}`);
  }
  getAllVerifMenus() {
    return this.httpClient.get<{ message: string, menu: any, verif: any }>(`${this.menuUrl}/allVerifMenus`);
  }
  getAllVerifMenusHome() {
    return this.httpClient.get<{ message: string, menu: any, verif: any }>(`${this.menuUrl}/allVerifMenusHome`);
  }

  getMenuById(id: string) {
    return this.httpClient.get<{ message: string, menu: string }>(`${this.menuUrl}/allMenu/${id}`);
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
    formData.append('verif', JSON.parse(localStorage.getItem('verif')));
    formData.append('userId', JSON.parse(localStorage.getItem('userId')));

    return this.httpClient.post<{ message: string }>(`${this.menuUrl}/addMenu`, formData);

  }

  addMultipleMenu(menus: Array<HomeMenu>, formData: FormData): Observable<any> {
    const verif = JSON.parse(localStorage.getItem('verif'));
    const userId = JSON.parse(localStorage.getItem('userId'));
    const status = Status.NEW;
    let parsedMenus: any = [];


    for (let index = 0; index < menus.length; index++) {
      const element = menus[index];
      let parsedMenu = { ...element, status, userId, verif };

      parsedMenus[index] = parsedMenu;
    }

    formData.set("menus", JSON.stringify(parsedMenus))
    return this.httpClient.post<{ message: string }>(`${this.menuUrl}/addMultipleMenu`, formData);

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
