import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  users: any = [];


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAllVerifChef();
  }

   // Methode verified profile chef
  private getAllVerifChef() {
    this.userService.getAllVerifChefProfile().subscribe(
      (data) => {
        this.users = data;
        console.log('Profile chef validated', this.users);

      },
      err => {
        console.dir(err);

      }

    )
  }

}
