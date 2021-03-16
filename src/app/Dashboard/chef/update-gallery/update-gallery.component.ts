import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GalleryRestauService } from 'src/app/services/gallery-restau.service';

@Component({
  selector: 'app-update-gallery',
  templateUrl: './update-gallery.component.html',
  styleUrls: ['./update-gallery.component.css']
})
export class UpdateGalleryComponent implements OnInit {
  id: any;
  gallery: any;
  galleryForm: FormGroup;
  imagePreview: string;
  gallerys: any = {};

  constructor( private galleryRestau:GalleryRestauService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private cdRef:ChangeDetectorRef,
    private toastr: ToastrService
               
    
    ) { }

  ngOnInit(): void {
    let idGallery = this.activatedRoute.snapshot.params.id;
    this.galleryForm = this.formBuilder.group({
      name: [''],
      adress:[''],
      img: ['']
      
    });
    this.galleryRestau.getByIdGallery(idGallery).subscribe(
      res=> {
        this.gallerys = res['gallery'];
        let gallery = res;   
      }
    )
  }
  
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.galleryForm.patchValue({ img: file });
    this.galleryForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.gallerys.img = reader.result as string
    };
    reader.readAsDataURL(file);
  }
   
  updateGallery():void {
   
    this.galleryRestau.editGallery(this.gallerys.id,this.gallerys, this.galleryForm.value.img).subscribe(
      reponse=>{
       
        this.toastr.warning(reponse.message);
        this.router.navigate(['table-display-gallery'])  
      },
      err=>{
        console.log(err);
      }  
    )
  }

}
