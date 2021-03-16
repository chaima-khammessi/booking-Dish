import { UsersService } from 'src/app/services/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() count: any;
  dateNow: Date;
  isLoggedIn: boolean;

  constructor(private usersSevice: UsersService, private cartService: CartService) { }

  ngOnInit(): void {
    this.dateNow = new Date();
    this.isLoggedIn = this.usersSevice.isLoggedIn();

    this.count = this.cartService.cartItems;



  }

}
