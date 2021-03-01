import { GalleryRestauService } from './../../../services/gallery-restau.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from './../../../services/gallery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-gallery',
  templateUrl: './display-gallery.component.html',
  styleUrls: ['./display-gallery.component.css']
})
export class DisplayGalleryComponent implements OnInit {
  id:any;
  gallery:any = [];
  constructor(private galleryRestau:GalleryRestauService,
              private activateRoute:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('id');
    this.galleryRestau.getByIdGallery(this.id).subscribe(
      data=>{
        console.log('this is all data for that Gallery',data);
        this.gallery=data.gallery
        console.log('********************',this.gallery);
        
        
      
    },
    err=>{
      console.log(err);
      
    }
    )

  }

}
