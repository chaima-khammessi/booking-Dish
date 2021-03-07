import { MenuService } from './../../services/menu.service';
import { DishService } from './../../services/dish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: any = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getAllVerifMenu();
  }

  private getAllVerifMenu() {
    this.menuService.getAllVerifMenusHome().subscribe(
      (data) => {
        this.menus = data;


        console.log('all menus Validated', this.menus);

      }, err => {
        console.dir(err)
      }
    )

  }

}
