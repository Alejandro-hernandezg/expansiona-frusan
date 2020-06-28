import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalEjemploComponent } from '../components/modal-ejemplo/modal-ejemplo.component';
import { ModalBuscarproductoComponent } from '../components/modal-buscarproducto/modal-buscarproducto.component';
import { ApiPruebaService } from '../services/api-prueba.service';

@Component({
  selector: 'frusan-dashboard-example',
  templateUrl: './dashboard-example.component.html',
  styleUrls: ['./dashboard-example.component.scss']
})
export class DashboardExampleComponent implements OnInit {

  resultadoApi: any;

  mensajeDesdeHijo: string;

  mensajePadre = 'Hola Mundo';

  tituloMantendor = 'Huerto';
  cantidadColumna = 6;

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
    private http: ApiPruebaService,
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

  modalAbircomponente() {
    this.dialogService.open(ModalBuscarproductoComponent, {
      closeOnBackdropClick: false,
    });
  }

  algunMetodo(algo) {
    this.mensajeDesdeHijo = algo;
  }

  obtenerDatosApi() {
    // Debe existir la url que vamos a consultar.
    // Debe existir variable a quién se le va a asignar los datos respuesta api
    // Recordar que lo que retorna es un Observable, por lo tanto usamos '.subscribe()' para obtener la data.'

    const urlPrueba = 'https://api.exchangeratesapi.io/latest';
    this.http.getPrueba(urlPrueba).subscribe(data => {
      if (data) {
        this.resultadoApi = data;
        console.log(this.resultadoApi);
      } else {
        alert('Información no disponible en este momento, por favor intente más tarde.');
      }
    });
  }
}
