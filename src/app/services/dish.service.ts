import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  getAllDish() {
    return this.httpClient.get<{ message: string, dish: any }>(`${this.dishUrl}/allDish`);
  }
  getDishById(id: number) {
    return this.httpClient.get<{ message: string, dish: any }>(`${this.dishUrl}/allDish/${id}`);
  }
  deleteDish(id: number) {
    return this.httpClient.delete(`${this.dishUrl}/allDish/${id}`);
  }
  addDish(dish: any) {
    return this.httpClient.post(`${this.dishUrl}/allDish`, dish);

  }
  editDish(dish: any) {
    return this.httpClient.put<{ message: string }>(`${this.dishUrl}/allDish/${dish.id}`, dish);


  }

}
