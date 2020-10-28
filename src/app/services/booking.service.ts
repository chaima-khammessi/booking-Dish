import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingUrl='http://localhost:3000'
  constructor( private httpClient:HttpClient) { }

  getAllBooking(){
    return this.httpClient.get<{ message:string, booking:any}>(`${this.bookingUrl}/allBooking`)
  }

  getByIdBooking(id:number){
    return this.httpClient.get<{message:string,booking:any}>(`${this.bookingUrl}/allBooking ${id}`)
  }

  deleteBooking(id:number){
    return this.httpClient.delete(`${this.bookingUrl}/deleteBooking/${id}`)
  }
  addBooking(booking:any){
    return this.httpClient.post(`${this.bookingUrl}/addBooking`,booking);
  }

  editBooking(booking:any){
    return this.httpClient.put<{message:string}>(`${this.bookingUrl}/editBooking/${booking.id}`,booking)
  }





}
