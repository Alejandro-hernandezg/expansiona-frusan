import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MantenedorMenuComponent } from './example/mantenedor-menu/mantenedor-menu.component';

import { MantenedorParametrosComponent } from './example/mantenedor-parametros/mantenedor-parametros.component';
import { MantenedorCampoComponent } from './example/mantenedor-campo/mantenedor-campo.component';
import { MantenedorProductoComponent } from './example/mantenedor-producto/mantenedor-producto.component';
import { MantenedorRecursoComponent } from './example/mantenedor-recurso/mantenedor-recurso.component';
import { MantenedorSistemaComponent } from './example/mantenedor-sistema/mantenedor-sistema.component';
import { MenuMantenedorComponent } from './example/menu-mantenedor/menu-mantenedor.component';


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
        {
          path: 'mantparametros',
          component: MantenedorParametrosComponent,
        },
        {
          path: 'mantcampo',
          component: MantenedorCampoComponent,
        },
        {
          path: 'mantproducto',
          component: MantenedorProductoComponent,
        },
        {
          path: 'mantrecurso',
          component: MantenedorRecursoComponent,
        },
        {
          path: 'mantsistema',
          component: MantenedorSistemaComponent,
        },
        {
          path: 'mantenedores',
          component: MenuMantenedorComponent,
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
