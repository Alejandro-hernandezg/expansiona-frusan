import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'frusan-modal-agregaregistro',
  templateUrl: './modal-agregaregistro.component.html',
  styleUrls: ['./modal-agregaregistro.component.scss']
})
export class ModalAgregaregistroComponent implements OnInit {

  constructor(
    private dialogRef: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
