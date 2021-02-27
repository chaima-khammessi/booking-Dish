import { DishService } from './../../services/dish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-dishes',
  templateUrl: './our-dishes.component.html',
  styleUrls: ['./our-dishes.component.css']
})
export class OurDishesComponent implements OnInit {
   dishs:any=[];

  constructor( private dishService:DishService) { }

  ngOnInit(): void {
    this.AllVerifDishs()
  }


  private AllVerifDishs(){
    this.dishService.getAllVerifDishs().subscribe(
      data=>{
        this.dishs=data;
        console.log('all Dishs valideted',data);
        
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}
