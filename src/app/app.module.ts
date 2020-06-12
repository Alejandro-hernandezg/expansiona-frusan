import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbSidebarModule,
  NbCardModule,
  NbMenuModule,
  NbLayoutModule,
  NbCheckboxModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
  NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/@core.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NbAuthModule } from '@nebular/auth';


const NB_MODULES = [
  CommonModule,
  NbLayoutModule,
  NbCardModule,
  NbCheckboxModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  RouterModule,
  FormsModule,
  NbIconModule,
  NbSpinnerModule,
  NbEvaIconsModule,
  NbCardModule,
  NbAuthModule.forRoot(),
  HttpClientModule,
  NbSidebarModule.forRoot(),
  ThemeModule.forRoot(),
  CoreModule.forRoot(),
  NbMenuModule.forRoot(),
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...NB_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
