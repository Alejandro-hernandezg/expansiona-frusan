import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumnLayoutComponent } from './layouts';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { HeaderComponent } from './layouts/components/header/header.component';

const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule.forRoot(),
];

const COMPONENTS = [
  OneColumnLayoutComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ...NB_MODULES,
  ]
})
export class ThemeModule { }
