import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dashboard-admin',
  templateUrl: './header-dashboard-admin.component.html',
  styleUrls: ['./header-dashboard-admin.component.css']
})
export class HeaderDashboardAdminComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login-admin'])

  }

}
