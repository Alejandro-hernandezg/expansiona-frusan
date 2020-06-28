import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'frusan-mantenedor-parametros',
  templateUrl: './mantenedor-parametros.component.html',
  styleUrls: ['./mantenedor-parametros.component.scss']
})
export class MantenedorParametrosComponent implements OnInit {

  tituloMantendor = 'Principal';
  cantidadUnidad = 5;
  cantidadLabor = 6;
  cantidadConcepto = 3;

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

  datosUnidadMedida = {
    cabeceras: [
      {
        id: 1,
        nombre: 'Correlativo',
      },
      {
        id: 2,
        nombre: 'Descripción',
      },
      {
        id: 3,
        nombre: 'Abreviación',
      },
      {
        id: 4,
        nombre: 'Tipo',
      },
      {
        id: 5,
        nombre: 'Vigencia',
      },
    ],
    registros: [
      {
        Aplicacion: 1,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: 'SI',
        Producto: 'CXF',
      },
      {
        Aplicacion: 2,
        Nombre: 'S Globe 2016',
        SectorHuerto: 'L1-L3',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: 'NO',
        Producto: 'CXF',
      },
    ],
  };

  datosTipoLabor = {
    cabeceras: [
      {
        id: 1,
        nombre: 'Correlativo',
      },
      {
        id: 2,
        nombre: 'Nombre',
      },
      {
        id: 3,
        nombre: 'Unidad Labor',
      },
      {
        id: 4,
        nombre: 'Rendimiento',
      },
      {
        id: 5,
        nombre: 'Descripción',
      },
      {
        id: 6,
        nombre: 'Vigencia',
      },
    ],
    registros: [
      {
        Aplicacion: 1,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: '100',
        Dimensiones: 'Globe 2015',
        Producto: 'NO',
      },
      {
        Aplicacion: 2,
        Nombre: 'S Globe 2016',
        SectorHuerto: 'L1-L3',
        ObjetivoAplicacion: '200',
        Dimensiones: 'Globe 2016',
        Producto: 'SI',
      },
    ],
  };

  datosConceptoValor = {
    cabeceras: [
      {
        id: 1,
        nombre: 'Correlativo',
      },
      {
        id: 2,
        nombre: 'Descripción',
      },
      {
        id: 3,
        nombre: 'Vigencia',
      },
    ],
    registros: [
      {
        Aplicacion: 1,
        Nombre: 'S Globe 2015',
        SectorHuerto: 'NO',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: 'SI',
        Producto: 'CXF',
      },
      {
        Aplicacion: 2,
        Nombre: 'S Globe 2016',
        SectorHuerto: 'SI',
        ObjetivoAplicacion: 'Nutrición',
        Dimensiones: 'NO',
        Producto: 'CXF',
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
