import { Component, OnInit } from '@angular/core';
import { GalleryRestauService } from 'src/app/services/gallery-restau.service';

@Component({
  selector: 'app-gallery-restau',
  templateUrl: './gallery-restau.component.html',
  styleUrls: ['./gallery-restau.component.css']
})
export class GalleryRestauComponent implements OnInit {
  gallerys:any = [];
  constructor(private galleryRest:GalleryRestauService) { }

  ngOnInit(): void {
    this. getAllVerifGallery();
  }

  private  getAllVerifGallery(){
    this.galleryRest.getAllVerifGallerys().subscribe(
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
