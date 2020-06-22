import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalEjemploComponent } from '../modal-ejemplo/modal-ejemplo.component';

@Component({
  selector: 'frusan-mantenedor',
  templateUrl: './mantenedor.component.html',
  styleUrls: ['./mantenedor.component.scss']
})
export class MantenedorComponent implements OnInit {

  @Input() titleType: string;
  @Input() registers: any;


  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  editar() {

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

}
