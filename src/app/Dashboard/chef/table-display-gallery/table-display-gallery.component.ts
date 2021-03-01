import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GalleryRestauService } from './../../../services/gallery-restau.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-display-gallery',
  templateUrl: './table-display-gallery.component.html',
  styleUrls: ['./table-display-gallery.component.css']
})
export class TableDisplayGalleryComponent implements OnInit {

   gallerys: any = [];
   id: number;
   firstName: any;
   p: number = 1;
   filter: any;
   key: string = 'id';
   reserve: boolean = false;
  constructor( private galleryRestauService:GalleryRestauService,
               private router:Router,
               private toaster:ToastrService
    ) { }

  ngOnInit(): void {
    this. getAllUserDishes()
  }

  private getAllUserDishes() {
    const userId = JSON.parse(localStorage.getItem('userId'));
    this.galleryRestauService.getAllUserGallery(userId).subscribe(
      data => {
        this.gallerys = data['gallery'];
        console.log('information gallery',this.gallerys);
        
      },
      error => {
        console.log(error);
      }
    );
  }

  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }

  goToPhotoGallery(gallery) {
    this.router.navigate([`display-gallery/${gallery.id}`]);
  }

  deletePhotoGallery(gallery) {
    let index = this.gallerys.indexOf(gallery);
    this.gallerys.splice(index, 1);
    this.galleryRestauService.deleteGallery(gallery.id).subscribe(
      () => {
        this.getAllUserDishes();
        this.toaster.error('Gallery deleted successfully');
      },
      (err) => {
        console.dir(err);
      }
    )
  }

  goToEditGallery(id: number) {
    this.router.navigate([`update-gallery/${id}`]);
  }


}
