import { Status } from './../enums/status.enum';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from  'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryRestauService {
  galleryRestauUrl = 'http://localhost:3000'


  constructor( private httpClient:HttpClient) { }
  
  getAllGallery() {
    return this.httpClient.get<{ message: string, gallery: any }>(`${this.galleryRestauUrl}/allGalleryRestau`)
  }

  getByIdGallery(id: number) {
    return this.httpClient.get<{ message: string, gallery: any }>(`${this.galleryRestauUrl}/allGalleryRestau/${id}`)
  }
  getAllUserGallery(userId: String) {
    return this.httpClient.get<{ message: string, gallery: any }>(`${this.galleryRestauUrl}/allUserGallery/${userId}`);
  }
  getAllVerifGallerys() {
    return this.httpClient.get<{ message: string, gallery: any, verif:any }>(`${this.galleryRestauUrl}/allVerifGallerys`);
  }
  getAllVerifGallerysHome() {
    return this.httpClient.get<{ message: string, gallery: any, verif:any }>(`${this.galleryRestauUrl}/allVerifGallerysHome`);
  }

  deleteGallery(id: number) {
    return this.httpClient.delete(`${this.galleryRestauUrl}/deleteGalleryResatu/${id}`)
  }
  addGallery(gallery: any, image: File) {
    let formData = new FormData();
    formData.append('name', gallery.name);
    formData.append('adress', gallery.adress);
    formData.append('img', image);
    formData.append('status', Status.NEW);
    formData.append('verif',JSON.parse(localStorage.getItem('verif')));
    formData.append('userId', JSON.parse(localStorage.getItem('userId')));
    return this.httpClient.post<{ message: string }>(`${this.galleryRestauUrl}/addGallery`, formData);

  }

  editGallery(id, gallerys, image: File): Observable<any> {
    let formData = new FormData();
    formData.append('name', gallerys.name);
    formData.append('adress', gallerys.adress);
    if (image) {
      formData.append('img', image);
    }
    formData.append('status', Status.NEW);
    let stat= status.valueOf();
    formData.append('verif',stat);

    return this.httpClient.put(`${this.galleryRestauUrl}/editGalleryRestau/${id}`, formData, gallerys);
  }

  editGalleryById(id, gallery): Observable<any> {
    return this.httpClient.put(`${this.galleryRestauUrl}/editGalleryRestau/${id}`, gallery);
  }
}
