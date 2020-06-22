import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalEjemploComponent } from '../components/modal-ejemplo/modal-ejemplo.component';
import { ModalBuscarproductoComponent } from '../components/modal-buscarproducto/modal-buscarproducto.component';

@Component({
  selector: 'frusan-dashboard-example',
  templateUrl: './dashboard-example.component.html',
  styleUrls: ['./dashboard-example.component.scss']
})
export class DashboardExampleComponent implements OnInit {

  mensajePadre = 'Hola Mundo';
  mensajePadre2 = 'Hello World';

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

  modalAbircomponente(){
    this.dialogService.open(ModalBuscarproductoComponent, {
      closeOnBackdropClick: false,
    });
  }
}
