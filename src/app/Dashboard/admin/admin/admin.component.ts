import { adminService } from './../../../services/admins.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 

  constructor(  private adminService:adminService,
                private router:Router,
                
    ) { }

  ngOnInit(): void {
 
    
    }




    logout(){
      this.adminService.logoutAdmin();
      this.router.navigate(['login-admin'])

    }

}
