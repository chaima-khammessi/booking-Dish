import { DishService } from './../../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  id:string;
  dish:any;

  constructor(private router: Router,
              private dishService: DishService,
              private activatedRoute: ActivatedRoute,
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



