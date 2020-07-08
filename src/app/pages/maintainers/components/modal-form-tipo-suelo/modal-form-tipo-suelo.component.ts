import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'frusan-modal-form-tipo-suelo',
  templateUrl: './modal-form-tipo-suelo.component.html',
  styleUrls: ['./modal-form-tipo-suelo.component.scss']
})
export class ModalFormTipoSueloComponent implements OnInit {

  constructor(
    private dialogRef: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
