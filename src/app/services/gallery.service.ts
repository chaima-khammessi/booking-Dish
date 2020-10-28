import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  galleryUrl='http://localhost:3000'
  constructor( private httpClient:HttpClient) { }

  getAllGallery(){
    return this.httpClient.get<{ message:string, gallery:any}>(`${this.galleryUrl}/allGallery`)
  }

  getByIdGallery(id:number){
    return this.httpClient.get<{message:string,gallery:any}>(`${this.galleryUrl}allGallery ${id}`)
  }

  deleteGallery(id:number){
    return this.httpClient.delete(`${this.galleryUrl}/deleteGallery/${id}`)
  }
  addGallery(gallery:any){
    return this.httpClient.post(`${this.galleryUrl}/addGallery`,gallery);
  }

  editGallery(gallery:any){
    return this.httpClient.put<{message:string}>(`${this.galleryUrl}/editGallery/${gallery.id}`,gallery)
  }
}
