import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
     urlUsers= 'http://localhost:3000'
  constructor(private httpClient:HttpClient) { }
  getAllConsumer(){
    return this.httpClient.get<{message:string, consumers:any}>(`${this.urlUsers}/allConsumer`);
  }
  getByIdConsumer(id:number){
    return this.httpClient.get<{message:String, consumers:any}>(`${this.urlUsers}/allConsumer/${id}`);

  }
  deleteConsumer(id:number){
  return this.httpClient.delete(`${this.urlUsers}/deleteConsumer/${id}`);
  }
  addConsumer(consumers:any){
    return this.httpClient.post(`${this.urlUsers}/addConsumer`,consumers);
  }
  editConsumer(consumers:any){
    return this.httpClient.put<{message:string,consumers:any}>(`${this.urlUsers}/allConsumer/${consumers.id}`,consumers)
  }

  getAllCompany(){
    return this.httpClient.get<{message:string, companys:any}>(`${this.urlUsers}/allCompany`);
  }
  getByIdCompany(id:number){
    return this.httpClient.get<{message:String, companys:any}>(`${this.urlUsers}/allCompany/${id}`);

  }
  deleteCompany(id:number){
  return this.httpClient.delete(`${this.urlUsers}/deleteCompany/${id}`);
  }
  addCompany(companys:any){
    return this.httpClient.post(`${this.urlUsers}/addCompany`,companys);
  }
  editCompany(companys:any){
    return this.httpClient.put<{message:string,companys:any}>(`${this.urlUsers}/allCompany/${companys.id}`,companys)
  }
  getAllChef(){
    return this.httpClient.get<{message:string, chefs:any}>(`${this.urlUsers}/allChef`);
  }
  getByIdChef(id:number){
    return this.httpClient.get<{message:String, chefs:any}>(`${this.urlUsers}/allChef/${id}`);

  }
  deleteChef(id:number){
  return this.httpClient.delete(`${this.urlUsers}/deleteChef/${id}`);
  }
  addChef(chefs:any){
    return this.httpClient.post(`${this.urlUsers}/addChef`,chefs);
  }
  editChef(chefs:any){
    return this.httpClient.put<{message:string,chefs:any}>(`${this.urlUsers}/allChef/${chefs.id}`,chefs)
  }


  login(user:any){
    return this.httpClient.post<{ message:string, user:any}>(`${this.urlUsers}/addLogin`,user);
  }

  /*loginCompany(company:any){
    return this.httpClient.post<{ message:string, user:any}>(`${this.urlUsers}/addLoginCompany`,company);
  }*/

  

}
