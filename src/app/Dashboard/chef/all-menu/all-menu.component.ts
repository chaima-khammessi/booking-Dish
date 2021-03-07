import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MenuService } from './../../../services/menu.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-all-menu',
  templateUrl: './all-menu.component.html',
  styleUrls: ['./all-menu.component.css']
})
export class AllMenuComponent implements OnInit {
  @Input() dataMenu: any;
  @Output() newMenu: EventEmitter<any> = new EventEmitter();

  menus: any = [];
  id: number;
  firstName: any;
  p: number = 1;
  filter: any;
  key: string = 'id';
  reserve: boolean = false;

  constructor(private menuServce:MenuService ,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllUserMenus();
  }
  private getAllUserMenus() {
    const userId = JSON.parse(localStorage.getItem('userId'));
    this.menuServce.getAllUserMenus(userId).subscribe(
      data => {
        this.menus = data['menu'];
        console.log(this.menus);
        
      },
      error => {
        console.log(error);
      }
    );
  }

  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }

  goToMenu(menu) {
    this.router.navigate([`display-menu-chef/${menu.id}`]);
  }

  deleteMenu(menu) {
    let index = this.menus.indexOf(menu);
    this.menus.splice(index, 1);
    this.menuServce.deleteMenu(menu.id).subscribe(
      () => {
        this.getAllUserMenus();
        this.toastr.error('Menu deleted successfully');
      },
      (err) => {
        console.dir(err);
      }
    )
  }


}
