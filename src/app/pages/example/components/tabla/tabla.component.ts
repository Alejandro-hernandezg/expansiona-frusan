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

  constructor() { }

  ngOnInit(): void {
  }

}
