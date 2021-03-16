import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {
  menus: any = [];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.affichMenuVerif();
  }

  private affichMenuVerif() {
    this.menuService.getAllVerifMenus().subscribe(
      (data) => {
        this.menus = data;
        console.log('All Menu Verified', this.menus);

      },
      (err) => {
        console.dir(err);

      }
    )
  }

}
