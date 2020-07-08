import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalTipoComponent } from '../modal-tipo/modal-tipo.component';
import { ModalFormUnidadMedidaComponent } from '../modal-form-unidad-medida/modal-form-unidad-medida.component';

@Component({
  selector: 'frusan-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.scss']
})
export class UnidadMedidaComponent implements OnInit {

  @Input() datos: any;

  constructor(private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
  }

  editar() {

    this.dialogService.open(ModalFormUnidadMedidaComponent, {
      context: {
        
      },
      closeOnBackdropClick: false,
    });
  }

  eliminar() {
    this.dialogService.open(ModalTipoComponent, {
      context: {
        tipoConfirmacion: true,
        titulo: 'Confirmación',
        mensaje: '¿Seguro que desea eliminar el registro?',
      },
      closeOnBackdropClick: false
    });
  }

  modalAgregarregistrocomponente(){
  }

}
