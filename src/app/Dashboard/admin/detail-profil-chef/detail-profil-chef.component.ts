import { Status } from './../../../enums/status.enum';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-profil-chef',
  templateUrl: './detail-profil-chef.component.html',
  styleUrls: ['./detail-profil-chef.component.css']
})
export class DetailProfilChefComponent implements OnInit {
   @Output() newUser : EventEmitter<any> = new EventEmitter();
  filter: any;
  firstName: any;
  p: number = 1;
  closeResult: string;
  users:any=[];
  validator:boolean=false;
  id:number;

  constructor(private toastr: ToastrService,
              private modalService: NgbModal,
              private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUserChef().subscribe(
      (data)=>{
        this.users=data['users'];
        console.log('All chef', this.users); 
      },
      error=>
      {
        console.log(error);
      }
    )
  }

  key: string = 'id';
  reserve: boolean = false
  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  deleteChef(user){
    let index=this.users.indexOf(user);
    this.users.splice(index,1);
    this.userService.deleteUser(user._id).subscribe(
      ()=>{
        this.userService.getAllUserChef().subscribe(
          data=>{
            this.newUser.emit(data.users);
            this.toastr.error('User deleted successfully');

            
          }
        )
      },
      (err)=>{
        console.log(err);
        

      }
      )

    
  }

  /************ Add popup ******************/
  open(content, user) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    user.status = Status.REFUSED;
    user.verif = "REFUSED";

    this.userService.editUserById(user._id, user).subscribe(
      data => {
        this.users = data.user;
        console.log("User refusing", "refused");

      },
      (error) => {
        this.toastr.error('Error when refusing the User');
      }

    )
    return this.validator == true


  }


  validatorUser(user) {


    user.status = Status.VALIDATED;
    user.verif = Status.VALIDATED;
    this.userService.editUserById(user._id, user).subscribe(
      data => {
        this.users = data.user 
        // send notification to the chef
        console.log("User validation", "validated");
      },
      (error) => {
        this.toastr.error('Error when validating the User');
      }
    )
    return this.validator == true

  }

}
