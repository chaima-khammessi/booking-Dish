import { DishService } from './../../../services/dish.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataDish: any;
  @Output() newDish: EventEmitter<any> = new EventEmitter();

  dishs: any = [];
  id: number;
  firstName: any;
  p: number = 1;
  filter: any;
  key: string = 'id';
  reserve: boolean = false;

  constructor(private dishService: DishService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAllUserDishes();
  }

  private getAllUserDishes() {
    const userId = JSON.parse(localStorage.getItem('userId'));
    this.dishService.getAllUserDishs(userId).subscribe(
      data => {
        this.dishs = data['dish'];
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

  goToDish(dish) {
    this.router.navigate([`display-dish-chef/${dish.id}`]);
  }

  deleteDish(dish) {
    let index = this.dishs.indexOf(dish);
    this.dishs.splice(index, 1);
    this.dishService.deleteDish(dish.id).subscribe(
      () => {
        this.getAllUserDishes();
        this.toastr.error('Dish deleted successfully');
      },
      (err) => {
        console.dir(err);
      }
    )
  }

  goToEditDish(id: number) {
    this.router.navigate([`update-dish/${id}`]);
  }

}



