import { UsersService } from './../../../services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  constructor( private userService:UsersService,
    
               private router:Router) { }

  ngOnInit(): void {
  }



  logout(){
    this.userService.logoutUser();
    this.router.navigate(['login'])

  }

}

