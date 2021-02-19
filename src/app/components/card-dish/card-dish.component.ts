import { DishService } from './../../services/dish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dish',
  templateUrl: './card-dish.component.html',
  styleUrls: ['./card-dish.component.css']
})
export class CardDishComponent implements OnInit {

  dishs:any=[];

  constructor( private dishServive:DishService) { }

  ngOnInit(): void {
    this.getAllVerifDishs()
  }

  private getAllVerifDishs() {
    this.dishServive.getAllVerifDishs().subscribe(
        (data) => {
            this.dishs = data;
  
  
            console.log('all dish Validated',this.dishs);
            
        },err=>{
          console.dir(err)
        }
      )
  
    }

}
