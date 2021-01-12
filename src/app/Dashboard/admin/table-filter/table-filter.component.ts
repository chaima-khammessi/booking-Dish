import { DishService } from './../../../services/dish.service';
import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {
  @Input() user: any;
  @Input() dish: any;
  @Output() newUser: EventEmitter<any> = new EventEmitter();
  users: any = [];
  dishs: any = [];
  id: number;
  firstName: any;
  p: number = 1;
  filter: any;
  constructor(private usersService: UsersService,
    private router: Router,
    private toastr: ToastrService,
    private dishService: DishService
  ) { }

  ngOnInit(): void {

    this.usersService.getAllUser().subscribe(
      data => {
        this.users = data['users'];
        console.log(this.users);

      },
      error => {
        console.log(error);

      }

    )

    this.dishService.getAllDishs().subscribe(
      data => {
        this.dishs = data['dish'];
        console.log(this.dishs);

      },
      error => {
        console.log(error);

      }
    )
  }


  /* searsh(){
     if(this.firstName ==""){
       this.ngOnInit();
     }
     else{
       this.users=this.users.filter(res =>{
         return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
       })
     }
   }*/

  key: string = 'id';
  reserve: boolean = false
  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;


  }
  deleteUser(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.usersService.deleteUser(user._id).subscribe(
      () => {
        this.usersService.getAllUser().subscribe(
          res => {
            this.newUser.emit(res.users);
            this.toastr.error('User deleted successfully');


          }
        )
      },
      (err) => {
        console.dir(err);
      }
    )
  }

  displayUser(user) {
    this.router.navigate([`display-user/${user._id}`]);
  }
}
