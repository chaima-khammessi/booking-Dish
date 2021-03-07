import { MenuService } from './../../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-menu-chef',
  templateUrl: './display-menu-chef.component.html',
  styleUrls: ['./display-menu-chef.component.css']
})
export class DisplayMenuChefComponent implements OnInit {
  id:any;
  menu:any = [];
  constructor( private activetedRoute:ActivatedRoute,
                private menuSevice:MenuService   
    ) { }

  ngOnInit(): void {
    this.id = this.activetedRoute.snapshot.paramMap.get('id');
    this.menuSevice.getMenuById(this.id).subscribe(
      data => {
        console.log('menu', data);
        this.menu = data.menu
      }
    )
  }
  }


