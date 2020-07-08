import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaintainersService {

  constructor(private http: HttpClient) { }

  getUnidadMedida( ) {
    return this.http.get(environment.apiUrl + '/api/UnidadMedida'); // Recordar que el objeto devuelto es de tipo Observable.

  }

  getConceptoValor( ) {
    return this.http.get(environment.apiUrl + '/api/ConceptoValor');

  }

  getTipoSuelo( ) {
    return this.http.get(environment.apiUrl + '/api/TipoSuelo');

  }
}
