import { HttpClient } from '@angular/common/http';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems ;
  
  message = '';
  messageType = 'danger';

  cartUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getAllCart() {
    return this.httpClient.get<{ message: string, cart: any }>(`${this.cartUrl}/allCart`);
  }

  getByIdCart(id: number) {
    return this.httpClient.get<{ message: string, cart: any }>(`${this.cartUrl}/allCart/${id}`)
  }

  deleteCart(id: number) {
    return this.httpClient.delete(`${this.cartUrl}/deleteCart/${id}`);
  }

  addCart(cart: any) {
    return this.httpClient.post(`${this.cartUrl}/addCart`, cart)
  }
  addDish(dishId: string, quantity:1) {
    
    //get user id form localstorge
    const userId = JSON.parse(localStorage.getItem('userId'));
    //create obejct data (user id , dish id)
    const data = {
      userId, dishId, quantity,
    }
    return this.httpClient.post(`${this.cartUrl}/addDishToCart`, data)
  }
  

  editCart(cart: any) {
    return this.httpClient.put<{ message: string }>(`${this.cartUrl}/editCart/${cart.id}`, cart)
  }


  error(message) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;
  }






  getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(item: string) {
    const cart: any = this.getCart();
    if (cart.find(data => JSON.stringify(data) === JSON.stringify(item))) {
      return false;
    } else {
      cart.push(item);
      this.cartItems
      localStorage.setItem('cart', JSON.stringify(cart));
      return true;
    }
  }

  removeFromCart(item: string) {
    let cart: any = this.getCart();
    if (cart.find(data => JSON.stringify(data) === JSON.stringify(item))) {
      cart = cart.filter(data => JSON.stringify(data) !== JSON.stringify(item));
      this.cartItems--;
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  clearCart() {
    this.cartItems = 0;
    localStorage.setItem('cart', '[]');
  }






}
