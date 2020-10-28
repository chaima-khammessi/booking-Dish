import { DishService } from './../../services/dish.service';
import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor( private router:Router, 
    private dishService:DishService) { }

  ngOnInit(): void {
  }
  

}
