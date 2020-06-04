import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import {
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbAlertModule,
  NbButtonModule,
  NbTabsetModule,
  NbIconModule,
  NbDatepickerModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { PlanificationTableComponent } from './components/planification-table/planification-table.component';

const NB_MODULES = [
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbAlertModule,
  NbButtonModule,
  NbTabsetModule,
  NbIconModule,
  NbDatepickerModule.forRoot(),
];

const COMPONENTS = [
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    DashboardExampleComponent,
    PlanificationTableComponent,
  ],
  imports: [
    CommonModule,
    ...NB_MODULES,
    ExampleRoutingModule,
    FormsModule
  ],
  bootstrap: [
    DashboardExampleComponent,
  ]
})
export class ExampleModule { }
