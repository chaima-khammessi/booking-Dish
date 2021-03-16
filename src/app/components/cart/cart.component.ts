import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id: any;
  dish: any = {}
  constructor(private cartService: CartService,
    private activateRoute: ActivatedRoute


  ) { }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.cartService.getByIdCart(this.id).subscribe(
      data => {
        console.log('dish', data);
        this.dish = data.dishId
      }
    )
  }

}
