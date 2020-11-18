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


  constructor(private router: Router,
    private dishService: DishService) { }

  ngOnInit(): void {
  }
  goToDish(id: number) {
    this.router.navigate([`display_dish/${id}`]);


  }


}
