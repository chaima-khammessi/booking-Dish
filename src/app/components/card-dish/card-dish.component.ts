import { CartService } from './../../services/cart.service';
import { DishService } from './../../services/dish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dish',
  templateUrl: './card-dish.component.html',
  styleUrls: ['./card-dish.component.css']
})
export class CardDishComponent implements OnInit {
  currentProduct;
  dishs: any = [];
  cartDishs: any = [];

  constructor(private dishServive: DishService,
    private cartService: CartService

  ) { }

  ngOnInit(): void {
    this.getAllVerifDishsHome()
  }

  private getAllVerifDishsHome() {
    this.dishServive.getAllVerifDishsHome().subscribe(
      (data) => {
        this.dishs = data;


        console.log('all dish Validated', this.dishs);

      }, err => {
        console.dir(err)
      }
    )

  }

  addToCart(data: any, quantity: number) {
    // this.cartService.addDish(data,)

  }

}
