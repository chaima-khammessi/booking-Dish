import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { GalleryRestauService } from './../../../services/gallery-restau.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-gallery-restau',
  templateUrl: './add-gallery-restau.component.html',
  styleUrls: ['./add-gallery-restau.component.css']
})
export class AddGalleryRestauComponent implements OnInit {
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];
  galleryForm: FormGroup;
  imagePreview: string;
  gallery: any = []


  constructor(private galleryRestauService: GalleryRestauService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.galleryForm = this.formBuilder.group({
      name: [''],
      adress: [''],
      img: [''],

    })
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.galleryForm.patchValue({ img: file });
    this.galleryForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  validate() {
    this.galleryRestauService.addGallery(this.gallery, this.galleryForm.value.img).subscribe(
      data => {
        console.log('returned data', data);
        this.router.navigate(['table-display-gallery']);
      }
    )

  }

}
