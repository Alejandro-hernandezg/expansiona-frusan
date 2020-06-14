import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'frusan-modal-ejemplo',
  templateUrl: './modal-ejemplo.component.html',
  styleUrls: ['./modal-ejemplo.component.scss']
})
export class ModalEjemploComponent implements OnInit {

  titulo: string;
  tipoConfirmacion: boolean;
  mensaje: string;

  constructor(
    private dialogRef: NbDialogRef<any>
  ) { }

  ngOnInit(): void {

    this.asignarTitulo();

  }

  asignarTitulo() {
    if ( this.tipoConfirmacion ) {
      this.titulo = 'Confirmación';
    } else {
      this.titulo = 'Advertencia';
    }
  }

  aceptar() {
    this.dialogRef.close('OK');
  }

  cancelar() {
    this.dialogRef.close();
  }

}
