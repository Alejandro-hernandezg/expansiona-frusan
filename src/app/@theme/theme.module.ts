import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumnLayoutComponent } from './layouts';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbMenuService} from '@nebular/theme';
import { DEFAULT_THEME } from './styles/theme.defaut';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent, FooterComponent } from './components';


const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];

const COMPONENTS = [
  OneColumnLayoutComponent,
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...NB_MODULES,
  ],
  exports: [
    CommonModule,
    ...COMPONENTS,
  ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        NbMenuService,
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME ],
        ).providers,
      ],
    };
  }
 }
