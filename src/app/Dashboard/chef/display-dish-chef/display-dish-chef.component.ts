import { ActivatedRoute } from '@angular/router';
import { DishService } from './../../../services/dish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-dish-chef',
  templateUrl: './display-dish-chef.component.html',
  styleUrls: ['./display-dish-chef.component.css']
})
export class DisplayDishChefComponent implements OnInit {
  id: string;
  dish: any;


  constructor(private dishService: DishService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dishService.getDishById(this.id).subscribe(
      data => {
        console.log('this is all data for that dish', data);
        this.dish = data.dish


      },
      err => {
        console.log(err);

      }
    )
  }

}
