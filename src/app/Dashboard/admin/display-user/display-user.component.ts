import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  id:any;
  user:any;

  constructor( private userService:UsersService,
               private activateRoute:ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('id');
    this.userService.getByIdUser(this.id).subscribe(
      data=>{
        console.log('this is all Data for User',data);
        this.user= data.users
        
      },
      err=>{
        console.log(err);
        
      }
    )

  }

}
