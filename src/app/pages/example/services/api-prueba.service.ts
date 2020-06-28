import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {

  constructor(private http: HttpClient) { }

  getPrueba( url: string ) {
    return this.http.get(url); // Recordar que el objeto devuelto es de tipo Observable.
  }
}
