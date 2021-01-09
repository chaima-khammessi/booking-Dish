import { DishService } from './../../../services/dish.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataDish: any;
  @Output()  newDish: EventEmitter<any> = new EventEmitter();

  dishs:any = [];
  id: number;
  firstName: any;
  p: number = 1;
  filter: any;

  constructor(private dishService: DishService,
               private router: Router) { }

  ngOnInit(): void {
    this.dishService.getAllDishs().subscribe(
      data => {
        this.dishs = data['dish'];


      },
      error => {
        console.log(error);

      }
    )
  }


  key: string = 'id';
  reserve: boolean = false
  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;


  }


  goToDish(dish) {

    this.router.navigate([`display-chef/${dish._id}`]);
  }


  
  deleteDish(dish) {

    let index = this.dishs.indexOf(dish);
    this.dishs.splice(index , 1);

    this.dishService.deleteDish(dish._id).subscribe(
      ()=>{
       
          this.dishService.getAllDishs().subscribe(
            res=>{
              this.newDish.emit(res.dish);
            }
          )
          },
          (err) => {
            console.dir(err);
          }
        )}
       
    

        goToEditDish(id:number) {
          this.router.navigate([`update-dish/${id}`]);
        }



}



