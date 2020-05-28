import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardExampleComponent } from './components/dashboard-example/dashboard-example.component';


const routes: Routes = [
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
