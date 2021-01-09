import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dashoard-chef',
  templateUrl: './header-dashoard-chef.component.html',
  styleUrls: ['./header-dashoard-chef.component.css']
})
export class HeaderDashoardChefComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }


  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])

  }

}
