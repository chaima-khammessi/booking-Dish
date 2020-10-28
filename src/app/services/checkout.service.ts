import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  checkoutUrl='http://localhost:3000'
  constructor( private httpClient:HttpClient) { }

  getAllChekout(){
    return this.httpClient.get<{ message:string, checkout:any}>(`${this.checkoutUrl}/allCheckout`)
  }

  getByIdCheckout(id:number){
    return this.httpClient.get<{message:string,checkout:any}>(`${this.checkoutUrl}allCheckout ${id}`)
  }

  deleteCheckout(id:number){
    return this.httpClient.delete(`${this.checkoutUrl}/deleteCheckout/${id}`)
  }
  addcheckout(checkout:any){
    return this.httpClient.post(`${this.checkoutUrl}/addCheckout`,checkout);
  }

  editGallery(checkout:any){
    return this.httpClient.put<{message:string}>(`${this.checkoutUrl}/editCheckout/${checkout.id}`,checkout)
  }
}
