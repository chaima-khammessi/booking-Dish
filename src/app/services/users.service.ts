import { Status } from './../enums/status.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urlUsers = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getAllUser() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.urlUsers}/allUser`);
  }
  getAllUserChef() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.urlUsers}/allUserChef`);


  }
  getAllVerifChef() {
    return this.httpClient.get<{ message: string, users: any, verif:any }>(`${this.urlUsers}/allVerifChefs`);
  }
  getAllUserId(userId: String) {
    return this.httpClient.get<{ message: string, users: any }>(`${this.urlUsers}/allUserId/${userId}`);
  }
  getByIdUser(id: number) {
    return this.httpClient.get<{ message: String, users: any }>(`${this.urlUsers}/allUser/${id}`);

  }
  deleteUser(id: number) {
    return this.httpClient.delete(`${this.urlUsers}/deleteUser/${id}`);
  }
  addUser(users: any) {
    return this.httpClient.post(`${this.urlUsers}/addUser`, users);
  }
  addUserProfile(user: any, image: File) {
    let formData = new FormData();
    formData.append('fName', user.fName);
    formData.append('lName', user.lName);
    formData.append('email', user.email);
    formData.append('tel', user.tel);
    formData.append('img', image);
    formData.append('adress', user.adress);
    formData.append('specialityChef',user.specialityChef);
    formData.append('expChef', user.expChef);
    formData.append('nationality',user.nationality);
    formData.append('restaurant',user.restaurant);
    formData.append('facebook', user.facebook);
    formData.append('instagram', user.instagram);
    formData.append('twitter', user.twitter);
    formData.append('linkedin', user.linkedin);
    formData.append('status', Status.NEW);
    formData.append('verif',JSON.parse(localStorage.getItem('verif')));


   
    return this.httpClient.post<{ message: string }>(`${this.urlUsers}/addUserProfile`, formData);

  }
  editUser(users: any) {
    return this.httpClient.put<{ message: string, users: any }>(`${this.urlUsers}/editUser/${users.id}`, users)
  }
  editUserId(id, user, image: File):Observable<any> {
    let formData = new FormData();
    formData.append('fName', user.fName);
    formData.append('lName', user.lName);
    formData.append('email', user.email);
    formData.append('tel', user.tel);
    if (image) {
      formData.append('img', image);
    }
    formData.append('adress', user.adress);
    formData.append('specialityChef',user.specialityChef);
    formData.append('expChef', user.expChef);
    formData.append('nationality',user.nationality);
    formData.append('restaurant',user.restaurant);
    formData.append('facebook', user.facebook);
    formData.append('instagram', user.instagram);
    formData.append('twitter', user.twitter);
    formData.append('linkedin', user.linkedin);
    formData.append('status', Status.NEW);
    let stat= status.valueOf();
    formData.append('verif',stat);
   
    return this.httpClient.put(`${this.urlUsers}/editUserId/${id}`, formData, user);
  }

  editUserById(id, user): Observable<any> {
    return this.httpClient.put(`${this.urlUsers}/editUserId/${id}`, user);
  }
  
  


  login(user: any) {
    console.log('user in service', user);

    return this.httpClient.post<{ message: string, userType: string,userId: string, token: any }>(`${this.urlUsers}/addLogin`, user);

  }


  logoutUser() {
    return this.httpClient.get<{ message: string }>(`${this.urlUsers}/logoutUser`)
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
