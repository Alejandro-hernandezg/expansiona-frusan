import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'frusan-modal-form-concepto',
  templateUrl: './modal-form-concepto.component.html',
  styleUrls: ['./modal-form-concepto.component.scss']
})
export class ModalFormConceptoComponent implements OnInit {

  constructor(
    private dialogRef: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
