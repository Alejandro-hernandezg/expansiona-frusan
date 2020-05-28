
import { CommonModule } from '@angular/common';
import { AnalyticsService, LayoutService } from './services';

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthGuard } from './utils/auth.guard';

export const NB_CORE_PROVIDERS = [
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
  }).providers,
  AnalyticsService,
  LayoutService,
];

@NgModule({
  declarations: [],
  exports: [
    NbAuthModule,
  ],
  imports: [
    CommonModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS, AuthGuard,
      ],
    };
  }
 }
