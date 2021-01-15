import { Status } from './../../../enums/status.enum';
import { adminService } from './../../../services/admins.service';
import { Router } from '@angular/router';
import { DishService } from './../../../services/dish.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ToastrService, ToastrModule } from 'ngx-toastr';

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
  validator:boolean=false;

  constructor(private dishService: DishService,
    private router: Router,
    private adminService: adminService,
    private toastr: ToastrService

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


  validatorDish(dish){
    /**
     * Steps
     * 
     * DONE update the dish status
     * DONE send a post request to mongo
     * get success/error
     * on response : send notification to the chef
     * on error : show error toast
     */
    
    dish.status = Status.VALIDATED;
    this.dishService.editDishById(dish.id, dish).subscribe(
      data=>{
       this.dishs=data.dish
       // send notification to the chef
       console.log("Dish validation" , "validated");
      },
       (error)=>{
        this.toastr.error('Error when validating the Dish');
      }
    )
    return this.validator==true
    
  }













  logout() {
    this.adminService.logoutAdmin();
    this.router.navigate(['login-admin'])

  }

}
