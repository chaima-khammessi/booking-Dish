import { Status } from './../../enums/status.enum';
import { DishService } from './../../services/dish.service';
import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-todays-special',
  templateUrl: './todays-special.component.html',
  styleUrls: ['./todays-special.component.css']
})
export class TodaysSpecialComponent implements OnInit {
  @Input() dataDish: any;
  dishs: any = [];
  id: number;


  constructor(private router: Router,
    private dishService: DishService) { }

  ngOnInit(): void {
    this.getAllspecialDishs()

  }

  private getAllspecialDishs() {
    this.dishService.getAllspecialDishs().subscribe(
      (data) => {
        this.dishs = data;


        console.log('all dish special', this.dishs);

      }, err => {
        console.dir(err)
      }
    )

  }
  goToDish(dish) {
    this.router.navigate([`dish/${dish.id}`]);


  }


}
