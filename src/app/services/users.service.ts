import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  getByIdUser(id: number) {
    return this.httpClient.get<{ message: String, users: any }>(`${this.urlUsers}/allUser/${id}`);

  }
  deleteUser(id: number) {
    return this.httpClient.delete(`${this.urlUsers}/deleteUser/${id}`);
  }
  addUser(users: any) {
    return this.httpClient.post(`${this.urlUsers}/addUser`, users);
  }
  editUser(users: any) {
    return this.httpClient.put<{ message: string, users: any }>(`${this.urlUsers}/editUser/${users.id}`, users)
  }




  login(user: any) {
    console.log('user in service', user);

    return this.httpClient.post<{ message: string, userType: string }>(`${this.urlUsers}/addLogin`, user);

  }


  logoutUser(){
    return this.httpClient.get<{message:string}>(`${this.urlUsers}/logoutUser`)
  }

}
