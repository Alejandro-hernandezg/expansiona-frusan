import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalTipoComponent } from '../modal-tipo/modal-tipo.component';
import { ModalFormTipoSueloComponent } from '../modal-form-tipo-suelo/modal-form-tipo-suelo.component';

@Component({
  selector: 'frusan-tipo-suelo',
  templateUrl: './tipo-suelo.component.html',
  styleUrls: ['./tipo-suelo.component.scss']
})
export class TipoSueloComponent implements OnInit {

  @Input() datos: any;

  constructor(private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
  }

  editar() {

    this.dialogService.open(ModalFormTipoSueloComponent, {
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
