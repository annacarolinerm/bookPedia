import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  buscar(valorDigitado: string, startIndex: number = 0, maxResults: number = 10): Observable<LivrosResultado> {
    const params = new HttpParams()
      .set('q', valorDigitado)
      .set('startIndex', startIndex)
      .set('maxResults', maxResults);
    return this.http.get<LivrosResultado>(this.API, { params });
  }
}
