import { Component, OnInit } from '@angular/core';
import { MaintainersService } from '../services/maintainers.service';

@Component({
  selector: 'frusan-countryside',
  templateUrl: './countryside.component.html',
  styleUrls: ['./countryside.component.scss']
})
export class CountrysideComponent implements OnInit {

  tipoSueloData : any;

  constructor(private http: MaintainersService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.http.getTipoSuelo().subscribe(data => {
      if (data) {
        this.tipoSueloData = data;
      }

    });

  }

}
