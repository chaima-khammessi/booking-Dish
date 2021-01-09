import { ActivatedRoute } from '@angular/router';
import { DishService } from './../../../services/dish.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-chef',
  templateUrl: './gallery-chef.component.html',
  styleUrls: ['./gallery-chef.component.css']
})
export class GalleryChefComponent implements OnInit {
  dishs: any = [];
  constructor( private dishService:DishService,
              private activatedRoute:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
 this.dishService.getAllDishs().subscribe(
   data=>{
     this.dishs=data['dish'];
     console.log(this.dishs);
     
   }
 )


  }

}
