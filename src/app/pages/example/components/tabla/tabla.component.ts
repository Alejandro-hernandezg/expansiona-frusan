import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'frusan-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @Input() mensaje: string;
  @Input() mensaje2: string;
  @Output() salida: EventEmitter<any> = new EventEmitter();

  mesajeHijo: string;

  constructor() { }

  ngOnInit(): void {
    this.mesajeHijo = 'Soy el mensaje que viene desde el hijo';
  }

  enviarMensaje() {
    this.salida.emit(this.mesajeHijo);
  }

}
