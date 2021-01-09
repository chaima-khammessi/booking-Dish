import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';





@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {
  @Input() user: any;
  users: any = [];
  id: number;
  firstName:any;
  p:number=1;
  filter:any;
  constructor(private  usersService:UsersService,
              private route:Router) { }

  ngOnInit(): void {
    this.usersService.getAllUser().subscribe(
      data=>{
        this.users=data['users'];
      
        
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
 
key:string='id';
reserve:boolean=false
  sort(key){
    this.key=key;
    this.reserve=!this.reserve;


  }


}
