import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintainersRoutingModule } from './maintainers-routing.module';
import { MaintainersComponent } from './maintainers.component';
import { UnidadMedidaComponent } from './components/unidad-medida/unidad-medida.component';
import { TipoLaborComponent } from './components/tipo-labor/tipo-labor.component';
import { ConceptoValorComponent } from './components/concepto-valor/concepto-valor.component';
import { ParametersComponent } from './parameters/parameters.component';
import { NbCardModule, NbSelectModule, NbInputModule, NbAlertModule, NbButtonModule, NbTooltipModule, NbTabsetModule, NbIconModule, NbDialogModule, NbDatepickerModule, NbThemeModule } from '@nebular/theme';

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

@NgModule({
  declarations: [MaintainersComponent, UnidadMedidaComponent, TipoLaborComponent, ConceptoValorComponent, ParametersComponent],
  imports: [
    CommonModule,
    MaintainersRoutingModule,
    ...NB_MODULES
  ]
})
export class MaintainersModule { }
