import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartUrl='http://localhost:3000'

  constructor( private httpClient:HttpClient) { }

   getAllCart(){
     return this.httpClient.get<{message:string , cart:any}>(`${this.cartUrl}/allCart`);
   }

   getByIdCart(id:number){
     return this.httpClient.get<{message:string, cart:any}>(`${this.cartUrl}/allCart/${id}`)
   }

   deleteCart(id:number){
     return this.httpClient.delete(`${this.cartUrl}/deleteCart/${id}`);
   }

   addCart(cart:any){
     return this.httpClient.post(`${this.cartUrl}/addCart`, cart)
   }

   editCart(cart:any){
     return this.httpClient.put<{message:string}>(`${this.cartUrl}/editCart/${cart.id}`,cart)
   }






}
