import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbSidebarModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/@core.module';

const NB_MODULES = [
  NbEvaIconsModule,
  NbCardModule,
  NbSidebarModule.forRoot(),
  ThemeModule.forRoot(),
  CoreModule.forRoot(),
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
