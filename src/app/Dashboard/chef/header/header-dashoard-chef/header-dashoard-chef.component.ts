import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dashoard-chef',
  templateUrl: './header-dashoard-chef.component.html',
  styleUrls: ['./header-dashoard-chef.component.css']
})
export class HeaderDashoardChefComponent implements OnInit {
 
  user: any = {};
  id: number;
  
  constructor(private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    const userId = JSON.parse(localStorage.getItem('userId'));
    //this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.userService.getByIdUser(userId).subscribe(
      data => {
        console.log('this is all Data for User', data);
        this.user = data.users
        console.log('this is Use  by id', this.user);


      },
      err => {
        console.log(err);

      }
    )
  }

 

 /* displayChef(user) {
    this.router.navigate([`profile/${user._id}`]);
  }*/

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])

  }

}
