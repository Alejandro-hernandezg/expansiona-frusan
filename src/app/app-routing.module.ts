import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';


const routes: Routes = [
  {
    path: 'pages', // por ahora
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: '', // por ahora
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


