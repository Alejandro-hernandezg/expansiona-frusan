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
  NbDatepickerModule,
  NbThemeModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { PlanificationTableComponent } from './components/planification-table/planification-table.component';
import { FormularioInicioComponent } from './components/formulario-inicio/formulario-inicio.component';

const NB_MODULES = [

];

const COMPONENTS = [
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    DashboardExampleComponent,
    PlanificationTableComponent,
    FormularioInicioComponent,
  ],
  imports: [
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbAlertModule,
    NbButtonModule,
    NbTabsetModule,
    NbIconModule,
    NbDatepickerModule.forRoot(),
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    NbThemeModule
  ],
  bootstrap: [
    DashboardExampleComponent,
  ]
})
export class ExampleModule { }
