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
  NbThemeModule,
  NbDialogModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { PlanificationTableComponent } from './components/planification-table/planification-table.component';
import { FormularioInicioComponent } from './components/formulario-inicio/formulario-inicio.component';
import { ModalEjemploComponent } from './components/modal-ejemplo/modal-ejemplo.component';

const NB_MODULES = [
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbAlertModule,
  NbButtonModule,
  NbTabsetModule,
  NbIconModule,
  NbDialogModule.forChild(),
  NbDatepickerModule.forRoot(),
  NbThemeModule
];

const COMPONENTS = [
  DashboardExampleComponent,
  PlanificationTableComponent,
  FormularioInicioComponent,
  ModalEjemploComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    ...NB_MODULES
  ],
  bootstrap: [
    DashboardExampleComponent,
  ]
})
export class ExampleModule { }
