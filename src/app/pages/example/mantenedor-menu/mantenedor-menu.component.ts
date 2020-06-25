import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'frusan-mantenedor-menu',
  templateUrl: './mantenedor-menu.component.html',
  styleUrls: ['./mantenedor-menu.component.scss']
})
export class MantenedorMenuComponent implements OnInit {

  tituloMantendor = 'Principal';

  datosRegistros = {
    cabeceras: [
      {
        id: 1,
        nombre: 'Aplicación',
      },
      {
        id: 2,
        nombre: 'Nombre',
      },
      {
        id: 3,
        nombre: 'Sector',
      },
      {
        id: 4,
        nombre: 'Objetivo',
      },
      {
        id: 5,
        nombre: 'Dimensiones',
      },
      {
        id: 6,
        nombre: 'Producto',
      }
    ],
    registros: [
      {
        Aplicacion: 3,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: '100x100,',
        Producto: 'CXF',
      },
      {
        Aplicacion: 3,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: '100x100,',
        Producto: 'CXF',
      },
      {
        Aplicacion: 3,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: '100x100,',
        Producto: 'CXF',
      },
      {
        Aplicacion: 3,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: '100x100,',
        Producto: 'CXF',
      },
      {
        Aplicacion: 3,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: '100x100,',
        Producto: 'CXF',
      },
      {
        Aplicacion: 3,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: '100x100,',
        Producto: 'CXF',
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
