import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'frusan-modal-buscarproducto',
  templateUrl: './modal-buscarproducto.component.html',
  styleUrls: ['./modal-buscarproducto.component.scss']
})
export class ModalBuscarproductoComponent implements OnInit {

  datosTablaproducto = [
    {
    Codigo: '00001',
    Descripcion: 'Bomba de agua',
    },
    {
      Codigo: '00002',
      Descripcion: 'Semillas ecologicas',
      },
      {
        Codigo: '00003',
        Descripcion: 'Mesas de cultivo metalicas',
        },
        {
          Codigo: '00004',
          Descripcion: 'Tubo de riego',
          },
          {
            Codigo: '00005',
            Descripcion: 'Piquetas para tubo',
            },
            {
              Codigo: '00006',
              Descripcion: 'Valvula de cierre',
              },
  ];

  constructor(
    private dialogRef: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close();
  }
}
