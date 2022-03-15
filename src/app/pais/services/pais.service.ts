import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisPorCodigo(termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisesPorContinente(termino: string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
