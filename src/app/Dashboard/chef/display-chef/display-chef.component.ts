import { DishService } from './../../../services/dish.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-chef',
  templateUrl: './display-chef.component.html',
  styleUrls: ['./display-chef.component.css']
})
export class DisplayChefComponent implements OnInit {
 id:string;
 dish:any;

  constructor( private activatedRoute:ActivatedRoute,
               private dishService:DishService
    
    ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dishService.getDishById(this.id).subscribe(
      data => {
        console.log('dish', data);
        this.dish = data.dish
      }
    )
  }

}
