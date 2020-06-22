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
  NbDialogModule,
  NbTooltipModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { PlanificationTableComponent } from './components/planification-table/planification-table.component';
import { FormularioInicioComponent } from './components/formulario-inicio/formulario-inicio.component';
import { ModalEjemploComponent } from './components/modal-ejemplo/modal-ejemplo.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MantenedorComponent } from './components/mantenedor/mantenedor.component';

const NB_MODULES = [
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbAlertModule,
  NbButtonModule,
  NbTooltipModule,
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
    TablaComponent,
    MantenedorComponent,
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
