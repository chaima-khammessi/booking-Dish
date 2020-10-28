import { DishService } from './../../services/dish.service';
import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-display-dish',
  templateUrl: './display-dish.component.html',
  styleUrls: ['./display-dish.component.css']
})
export class DisplayDishComponent implements OnInit {
  id:any;
  dish:any;

  constructor(private activateRoute:ActivatedRoute,
    private dishService:DishService
    ) { }

  ngOnInit(): void {

    this.id=this.activateRoute.snapshot.paramMap.get('id');
    this.dishService.getDishById(this.id).subscribe(
      data=>{
        this.dish=data.dish
        
      }
    )
  }

}
