import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { DashboardExampleComponent } from './components/dashboard-example/dashboard-example.component';
import { NbCardModule, NbSelectModule, NbInputModule, NbAlertModule, NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

const NB_MODULES = [
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbAlertModule,
  NbButtonModule,
];

const COMPONENTS = [
  DashboardExampleComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...NB_MODULES,
    ExampleRoutingModule,
    FormsModule
  ],
  bootstrap: [
    DashboardExampleComponent
  ]
})
export class ExampleModule { }
