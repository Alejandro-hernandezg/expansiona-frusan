import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'frusan-modal-modificaregistro',
  templateUrl: './modal-modificaregistro.component.html',
  styleUrls: ['./modal-modificaregistro.component.scss']
})
export class ModalModificaregistroComponent implements OnInit {

  registro: any;

  constructor(
    private dialogRef: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
