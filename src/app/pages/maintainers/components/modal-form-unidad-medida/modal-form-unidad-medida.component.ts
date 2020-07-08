import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'frusan-modal-form-unidad-medida',
  templateUrl: './modal-form-unidad-medida.component.html',
  styleUrls: ['./modal-form-unidad-medida.component.scss']
})
export class ModalFormUnidadMedidaComponent implements OnInit {

  constructor(
    private dialogRef: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
