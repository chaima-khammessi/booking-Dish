import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-campany',
  templateUrl: './header-campany.component.html',
  styleUrls: ['./header-campany.component.css']
})
export class HeaderCampanyComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])

  }

}
