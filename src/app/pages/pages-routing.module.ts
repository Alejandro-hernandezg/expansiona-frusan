import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
      path: '', // por ahora
      component: PagesComponent,
      children: [
        {
          path: 'example',
          loadChildren: () => import('./example/example.module')
            .then(m => m.ExampleModule),
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
