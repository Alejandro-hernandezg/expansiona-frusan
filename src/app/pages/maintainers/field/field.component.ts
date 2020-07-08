import { Component, OnInit } from '@angular/core';
import { MaintainersService } from '../services/maintainers.service';

@Component({
  selector: 'frusan-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  tipoSueloData: any;

  constructor(private http: MaintainersService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.http.getTipoSuelo().subscribe(data => {
      if (data) {
        this.tipoSueloData = data;
      }

    });

  }

}
