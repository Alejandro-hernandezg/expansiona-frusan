import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {

  constructor(private http: HttpClient) { }

  getPrueba( url: string ) {
    return this.http.get(environment.apiUrl + url); // Recordar que el objeto devuelto es de tipo Observable.

  }
}
