import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametersComponent } from './parameters/parameters.component';
import { FieldComponent } from './Field/Field.component';


const routes: Routes = [
  {
  path: 'parameters',
  component: ParametersComponent,
  },
  {
    path: 'field',
    component: FieldComponent,
    },
  {
  path: '',
  component: ParametersComponent,
  },
  {
  path: '**',
  component: ParametersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintainersRoutingModule { }
