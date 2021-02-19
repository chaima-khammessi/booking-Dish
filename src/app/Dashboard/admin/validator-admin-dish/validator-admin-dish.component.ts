import { Status } from './../../../enums/status.enum';
import { adminService } from './../../../services/admins.service';
import { Router } from '@angular/router';
import { DishService } from './../../../services/dish.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validator-admin-dish',
  templateUrl: './validator-admin-dish.component.html',
  styleUrls: ['./validator-admin-dish.component.css']
})
export class ValidatorAdminDishComponent implements OnInit {
  @Output() newDish: EventEmitter<any> = new EventEmitter()
  dishs: any = [];
  id: number;
  firstName: any;
  p: number = 1;
  filter: any;
  validator: boolean = false;
  title = 'appBootstrap';

  closeResult: string;

  constructor(private dishService: DishService,
    private router: Router,
    private adminService: adminService,
    private toastr: ToastrService,
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
    this.dishService.getAllDishs().subscribe(
      (data) => {
        this.dishs = data['dish'];



      })
  }
  key: string = 'id';
  reserve: boolean = false
  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;


  }


  /************ Add popup ******************/
  open(content, dish) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    dish.status = Status.REFUSED;
    dish.verif = "REFUSED";

    this.dishService.editDishById(dish.id, dish).subscribe(
      data => {
        this.dishs = data.dish;
        console.log("Dish refusing", "refused");

      },
      (error) => {
        this.toastr.error('Error when refusing the Dish');
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

  deletDish(dish) {

    let index = this.dishs.indexOf(dish);
    this.dishs.splice(index, 1);

    this.dishService.deleteDish(dish.id).subscribe(
      () => {

        this.dishService.getAllDishs().subscribe(
          res => {
            this.newDish.emit(res.dish);
            this.toastr.error('Dish deleted successfully');



          }
        )
      },
      (err) => {
        console.dir(err);
      }
    )
  }


  validatorDish(dish) {


    dish.status = Status.VALIDATED;
    dish.verif = Status.VALIDATED;
    this.dishService.editDishById(dish.id, dish).subscribe(
      data => {
        this.dishs = data.dish
        // send notification to the chef
        console.log("Dish validation", "validated");
      },
      (error) => {
        this.toastr.error('Error when validating the Dish');
      }
    )
    return this.validator == true

  }
  specialDish(dish) {
    dish.status = Status.SPECIAL;
    dish.verif = Status.SPECIAL;
    this.dishService.editDishById(dish.id, dish).subscribe(
      data => {
        this.dishs = data.dish;
        // send notifacation to the chef 
        console.log("dish special", "special");

      },
      (error) => {
        this.toastr.error('Error when specialing the Dish');
      }
    )
    return this.validator == true;
  }
















  logout() {
    this.adminService.logoutAdmin();
    this.router.navigate(['login-admin'])

  }

}
