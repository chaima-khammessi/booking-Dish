import { Status } from './../../../enums/status.enum';
import { ToastrService } from 'ngx-toastr';
import { adminService } from './../../../services/admins.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GalleryRestauService } from 'src/app/services/gallery-restau.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validator-admin-gallery',
  templateUrl: './validator-admin-gallery.component.html',
  styleUrls: ['./validator-admin-gallery.component.css']
})
export class ValidatorAdminGalleryComponent implements OnInit {
  @Output() newDish: EventEmitter<any> = new EventEmitter()
  gallerys: any = [];
  id: number;
  firstName: any;
  p: number = 1;
  filter: any;
  validator: boolean = false;
  title = 'appBootstrap';
  closeResult: string;
  constructor(private galleryRestau: GalleryRestauService,
    private router: Router,
    private adminService: adminService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.galleryRestau.getAllGallery().subscribe(
      (data) => {
        this.gallerys = data['gallery'];
      })
  }
  key: string = 'id';
  reserve: boolean = false
  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }
  /************ Add popup ******************/
  open(content, gallery) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    gallery.status = Status.REFUSED;
    gallery.verif = "REFUSED";

    this.galleryRestau.editGalleryById(gallery.id, gallery).subscribe(
      data => {
        this.gallerys = data.gallery;
        console.log("Gallery refusing", "refused");

      },
      (error) => {
        this.toastr.error('Error when refusing the Gallery');
      }

    )
    return this.validator == true


  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deletGallery(gallery) {

    let index = this.gallerys.indexOf(gallery);
    this.gallerys.splice(index, 1);

    this.galleryRestau.deleteGallery(gallery.id).subscribe(
      () => {

        this.galleryRestau.getAllGallery().subscribe(
          res => {
            this.newDish.emit(res.gallery);
            this.toastr.error('Gallery deleted successfully');



          }
        )
      },
      (err) => {
        console.dir(err);
      }
    )
  }


  validatorGallery(gallery) {


    gallery.status = Status.VALIDATED;
    gallery.verif = Status.VALIDATED;
    this.galleryRestau. editGalleryById(gallery.id, gallery).subscribe(
      data => {
        this.gallerys = data.gallery
        // send notification to the chef
        console.log("Gallery validation", "validated");
      },
      (error) => {
        this.toastr.error('Error when validating the Gallery');
      }
    )
    return this.validator == true

  }
 


  logout() {
    this.adminService.logoutAdmin();
    this.router.navigate(['login-admin'])

  }

}
