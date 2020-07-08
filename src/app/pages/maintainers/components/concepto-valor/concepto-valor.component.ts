import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalTipoComponent } from '../modal-tipo/modal-tipo.component';
import { ModalFormConceptoComponent } from '../modal-form-concepto/modal-form-concepto.component';

@Component({
  selector: 'frusan-concepto-valor',
  templateUrl: './concepto-valor.component.html',
  styleUrls: ['./concepto-valor.component.scss']
})
export class ConceptoValorComponent implements OnInit {

  @Input() datos: any;

  constructor(private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
  }

  editar() {

    this.dialogService.open(ModalFormConceptoComponent, {
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

  valores() {
  }

  modalAgregarregistrocomponente(){
  }

}
