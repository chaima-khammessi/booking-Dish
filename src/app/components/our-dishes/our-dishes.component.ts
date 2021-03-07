import { DishService } from './../../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-our-dishes',
  templateUrl: './our-dishes.component.html',
  styleUrls: ['./our-dishes.component.css']
})
export class OurDishesComponent implements OnInit {
   dishs:any=[];
dish:any;
countNuber = 1;

  constructor( private dishService:DishService,
              private cartService:CartService   
    ) { }

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

  addToCart( idd) {
    const id= idd
    this.dishService.getDishById(id).subscribe(
      data => {
        console.log('dish', data);
        this.dish = data.dish
      }
    )
    
    
if( this.cartService.addToCart(this.dish)){
    this.countNuber++ 
  this.cartService.cartItems =  this.countNuber
console.log(this.cartService.cartItems);
}
    else{
      console.log("err");

    }  
      /*this.cartService.success('Dish successfully added to cart.')*/
       //this.cartService.error('Dish has already been added to cart.');
  }







}
