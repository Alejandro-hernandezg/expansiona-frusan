import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frusan-one-column.layout',
  styleUrls: ['./one-column.layout.component.scss'],
  template: `
   <nb-layout windowMode>
      <nb-layout-header fixed>

      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" state="compacted" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

     <!--  <nb-layout-footer fixed>
        <vitamina-footer></vitamina-footer>
      </nb-layout-footer> -->
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
