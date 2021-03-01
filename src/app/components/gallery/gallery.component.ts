import { Component, OnInit } from '@angular/core';
import { GalleryRestauService } from 'src/app/services/gallery-restau.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallerys:any = [];
  constructor( private galleryRest:GalleryRestauService) { }

  ngOnInit(): void {
    this.getAllVerifGallery();
  }

  private  getAllVerifGallery(){
    this.galleryRest.getAllVerifGallerysHome().subscribe(
     (data)=>{
       this.gallerys=data;
       console.log('gallery Restaurant validated', this.gallerys);
       
     },
     err=>{
       console.dir(err);
       
     }

    )
  }

}
