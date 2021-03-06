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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { PlanificationTableComponent } from './components/planification-table/planification-table.component';
import { FormularioInicioComponent } from './components/formulario-inicio/formulario-inicio.component';
import { ModalEjemploComponent } from './components/modal-ejemplo/modal-ejemplo.component';
import { ModalBuscarproductoComponent } from './components/modal-buscarproducto/modal-buscarproducto.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { EjemploTableComponent } from './components/ejemplo-table/ejemplo-table.component';
import { MantenedorComponent } from './components/mantenedor/mantenedor.component';
import { MantenedorMenuComponent } from './mantenedor-menu/mantenedor-menu.component';
import { MantenedorParametrosComponent } from './mantenedor-parametros/mantenedor-parametros.component';
import { MantenedorCampoComponent } from './mantenedor-campo/mantenedor-campo.component';
import { MantenedorProductoComponent } from './mantenedor-producto/mantenedor-producto.component';
import { MantenedorRecursoComponent } from './mantenedor-recurso/mantenedor-recurso.component';
import { MantenedorSistemaComponent } from './mantenedor-sistema/mantenedor-sistema.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuMantenedorComponent } from './menu-mantenedor/menu-mantenedor.component';
import { ModalModificaregistroComponent } from './components/modal-modificaregistro/modal-modificaregistro.component';
import { ModalAgregaregistroComponent } from './components/modal-agregaregistro/modal-agregaregistro.component';


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
  ModalEjemploComponent,
  MantenedorComponent,
  TablaComponent,
  ModalBuscarproductoComponent,
  EjemploTableComponent,
  MantenedorMenuComponent,
  MantenedorParametrosComponent,
  MantenedorCampoComponent,
  MantenedorProductoComponent,
  MantenedorRecursoComponent,
  MantenedorSistemaComponent,
  ModalAgregaregistroComponent,
  ModalModificaregistroComponent,
  MenuMantenedorComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...NB_MODULES
  ],
  bootstrap: [
    DashboardExampleComponent,
  ]
})
export class ExampleModule { }
