import { Status } from './../../../enums/status.enum';
import { adminService } from './../../../services/admins.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MenuService } from './../../../services/menu.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validator-admin-menu',
  templateUrl: './validator-admin-menu.component.html',
  styleUrls: ['./validator-admin-menu.component.css']
})
export class ValidatorAdminMenuComponent implements OnInit {
  @Output() newMenu: EventEmitter<any> = new EventEmitter()
  menus: any = [];
  id: number;
  firstName: any;
  p: number = 1;
  filter: any;
  validator: boolean = false;
  title = 'appBootstrap';
  closeResult: string;


  constructor(private menuService:MenuService, 
    private router: Router,
    private adminService: adminService,
    private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.menuService.getAllMenu().subscribe(
      (data) => {
        this.menus = data['menu'];
      })
  }

  key: string = 'id';
  reserve: boolean = false
  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }
  /************ Add popup ******************/
  open(content, menu) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    menu.status = Status.REFUSED;
    menu.verif = "REFUSED";

    this.menuService.editMenuById(menu.id, menu).subscribe(
      data => {
        this.menus = data.galmenulery;
        console.log("Menu refusing", "refused");

      },
      (error) => {
        this.toastr.error('Error when refusing the Menu');
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

  deletMenu(menu) {

    let index = this.menus.indexOf(menu);
    this.menus.splice(index, 1);

    this.menuService.deleteMenu(menu.id).subscribe(
      () => {

        this.menuService.getAllMenu().subscribe(
          res => {
            this.newMenu.emit(res.menu);
            this.toastr.error('Menu deleted successfully');



          }
        )
      },
      (err) => {
        console.dir(err);
      }
    )
  }


  validatorMenu(menu) {


    menu.status = Status.VALIDATED;
    menu.verif = Status.VALIDATED;
    this.menuService.editMenuById(menu.id, menu).subscribe(
      data => {
        this.menus = data.menu
        // send notification to the chef
        console.log("Menu validation", "validated");
      },
      (error) => {
        this.toastr.error('Error when validating the Menu');
      }
    )
    return this.validator == true

  }
 


}
