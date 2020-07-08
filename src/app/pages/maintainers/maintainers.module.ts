import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintainersRoutingModule } from './maintainers-routing.module';
import { MaintainersComponent } from './maintainers.component';
import { UnidadMedidaComponent } from './components/unidad-medida/unidad-medida.component';
import { TipoLaborComponent } from './components/tipo-labor/tipo-labor.component';
import { ConceptoValorComponent } from './components/concepto-valor/concepto-valor.component';
import { ParametersComponent } from './parameters/parameters.component';
import { FieldComponent } from './field/field.component';
import {
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbAlertModule,
  NbButtonModule,
  NbTooltipModule,
  NbTabsetModule,
  NbIconModule,
  NbDialogModule,
  NbDatepickerModule,
  NbThemeModule } from '@nebular/theme';
import { TipoSueloComponent } from './components/tipo-suelo/tipo-suelo.component';
import { ModalTipoComponent } from './components/modal-tipo/modal-tipo.component';
import { ModalFormUnidadMedidaComponent } from './components/modal-form-unidad-medida/modal-form-unidad-medida.component';
import { ModalFormConceptoComponent } from './components/modal-form-concepto/modal-form-concepto.component';
import { ModalFormTipoSueloComponent } from './components/modal-form-tipo-suelo/modal-form-tipo-suelo.component';


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
  NbThemeModule,
];

@NgModule({
  declarations: [
    MaintainersComponent,
    UnidadMedidaComponent,
    TipoLaborComponent,
    ConceptoValorComponent,
    ParametersComponent,
    TipoSueloComponent,
    ModalTipoComponent,
    ModalFormUnidadMedidaComponent,
    ModalFormConceptoComponent,
    ModalFormTipoSueloComponent,
    FieldComponent,
  ],
  imports: [
    CommonModule,
    MaintainersRoutingModule,
    ...NB_MODULES,
  ]
})
export class MaintainersModule { }
