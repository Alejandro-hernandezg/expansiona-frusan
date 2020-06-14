import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NbMenuModule, NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
  ]
})
export class PagesModule { }
