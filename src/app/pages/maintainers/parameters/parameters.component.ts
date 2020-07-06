import { Component, OnInit } from '@angular/core';
import { MaintainersService } from '../services/maintainers.service';

@Component({
  selector: 'frusan-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  unidadMedidaData : any;

  constructor(private http: MaintainersService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.http.getUnidadMedida().subscribe(data => {
      if (data) {
        this.unidadMedidaData = data;
      }

    });
  }

}
