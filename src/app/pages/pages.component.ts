import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'frusan-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <frusan-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </frusan-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;

}
