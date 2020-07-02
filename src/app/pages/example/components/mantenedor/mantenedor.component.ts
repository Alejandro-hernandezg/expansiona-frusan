import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalEjemploComponent } from '../modal-ejemplo/modal-ejemplo.component';
import { ModalAgregaregistroComponent } from '../modal-agregaregistro/modal-agregaregistro.component';
import { ModalModificaregistroComponent } from '../modal-modificaregistro/modal-modificaregistro.component';

@Component({
  selector: 'frusan-mantenedor',
  templateUrl: './mantenedor.component.html',
  styleUrls: ['./mantenedor.component.scss']
})
export class MantenedorComponent implements OnInit {

  @Input() titleType: string;
  @Input() registers: any;
  @Input() countcolumn: any;


  constructor(private dialogService: NbDialogService) {

   }

  ngOnInit(): void {
  }

  editar(datosRegistro) {

    this.dialogService.open(ModalModificaregistroComponent, {
      context: {
        registro: datosRegistro,
      },
      closeOnBackdropClick: false,
    });
  }

  eliminar() {
    this.dialogService.open(ModalEjemploComponent, {
      context: {
        tipoConfirmacion: true,
        titulo: 'Confirmación',
        mensaje: '¿Esta segur@ de querer eliminar el registro?',
      },
      closeOnBackdropClick: false
    });
  }

  public greaterThan(subj: number, num: number) {
    return subj >= num;
  }

  modalAgregarregistrocomponente() {
    this.dialogService.open(ModalAgregaregistroComponent, {
      closeOnBackdropClick: false,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.registers.filter = filterValue.trim().toLowerCase();

  }

}
