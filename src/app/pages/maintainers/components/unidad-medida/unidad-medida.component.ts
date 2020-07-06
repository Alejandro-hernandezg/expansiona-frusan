import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'frusan-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.scss']
})
export class UnidadMedidaComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
