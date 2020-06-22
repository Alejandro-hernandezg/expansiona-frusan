import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalEjemploComponent } from '../components/modal-ejemplo/modal-ejemplo.component';

@Component({
  selector: 'frusan-dashboard-example',
  templateUrl: './dashboard-example.component.html',
  styleUrls: ['./dashboard-example.component.scss']
})
export class DashboardExampleComponent implements OnInit {

  tituloMantendor = 'Huerto';

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

  constructor(
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {

  }

  modalConfirmacion() {
    this.dialogService.open(ModalEjemploComponent, {
      context: {
        tipoConfirmacion: true,
        mensaje: '¿Desea usted realizar esta acción?',
      },
      closeOnBackdropClick: false,
    }).onClose.subscribe( data => console.log(data) );
  }

  modalAdvertencia() {
    this.dialogService.open(ModalEjemploComponent, {
      context: {
        tipoConfirmacion: false,
        mensaje: 'Al realizar esta acción usted puede comprobar los resultados por otro medio.',
      },
      closeOnBackdropClick: false,
    }).onClose.subscribe( data => console.log(data) );
  }

}
