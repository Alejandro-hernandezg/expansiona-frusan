import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const NB_MODULES = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbCardModule,
  NbSidebarModule.forRoot(),
  NbThemeModule.forRoot({ name: 'default' }),
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
