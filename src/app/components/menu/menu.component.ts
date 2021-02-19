import { DishService } from './../../services/dish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishs:any=[];

  constructor(private dishService:DishService) { }

  ngOnInit(): void {
    this.getAllVerifDishs();
  }

  private getAllVerifDishs() {
    this.dishService.getAllVerifDishs().subscribe(
        (data) => {
            this.dishs = data;
  
  
            console.log('all dish Validated',this.dishs);
            
        },err=>{
          console.dir(err)
        }
      )
  
    }

}
