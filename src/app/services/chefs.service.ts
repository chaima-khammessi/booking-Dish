import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {
  chefUrl='http://localhost:3000'
  constructor( private httpClient:HttpClient) { }

  getAllChef(){
    return this.httpClient.get<{ message:string, chef:any}>(`${this.chefUrl}/allChef`)
  }

  getByIdChef(id:number){
    return this.httpClient.get<{message:string,chef:any}>(`${this.chefUrl}/allChef ${id}`)
  }

  deleteChef(id:number){
    return this.httpClient.delete(`${this.chefUrl}/deleteChef/${id}`)
  }
  addChef(chef:any){
    return this.httpClient.post(`${this.chefUrl}/addChef`,chef);
  }

  editChef(chef:any){
    return this.httpClient.put<{message:string}>(`${this.chefUrl}/editChef/${chef.id}`,chef)
  }
}
