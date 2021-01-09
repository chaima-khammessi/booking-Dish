import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getAllDishs() {
    return this.httpClient.get<{ message: string, dish: any }>(`${this.dishUrl}/allDishs`);
  }
  getDishById(id: string) {
    return this.httpClient.get<{ message: string, dish: string }>(`${this.dishUrl}/allDishs/${id}`);
  }
  deleteDish(id: number) {
    return this.httpClient.delete(`${this.dishUrl}/deleteDish/${id}`);
  }
  
  addDish(dishs: any, image: File) {
    let formData = new FormData();
    formData.append('name', dishs.name);
    formData.append('price', dishs.price);
    formData.append('ingredient', dishs.ingredient);
    formData.append('calorie', dishs.calorie);
    formData.append('img', image);
    formData.append('description', dishs.description);
    return this.httpClient.post<{ message: string }>(`${this. dishUrl}/addDish`, formData);

  }
  editDish(dishs: any) {
    return this.httpClient.put<{ message: string }>(`${this. dishUrl}/editDish/${dishs.id}`, dishs);


  }


}
