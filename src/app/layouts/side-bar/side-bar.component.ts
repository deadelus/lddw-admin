import { Component, OnInit } from '@angular/core';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/users', title: 'Users',  icon:'users_single-02', class: '' },
  { path: '/posts', title: 'Posts',  icon:'design_bullet-list-67', class: '' },
  { path: '/reports', title: 'Reports',  icon:'ui-1_bell-53', class: '' },
  { path: '/badges', title: 'Badges',  icon:'text_caps-small', class: '' }
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

}
