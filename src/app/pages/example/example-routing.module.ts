import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { FormularioInicioComponent } from './components/formulario-inicio/formulario-inicio.component';


const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioInicioComponent
  },
  {
    path: '',
    component: DashboardExampleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
