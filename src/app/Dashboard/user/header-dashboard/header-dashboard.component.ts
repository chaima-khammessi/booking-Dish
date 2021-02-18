import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])

  }

}
