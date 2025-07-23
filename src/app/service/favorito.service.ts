import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../models/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private urlApiFavoritos: string = 'http://localhost:8080/usuario/favoritos'

  constructor(
    private http: HttpClient
  ) { }

  adicionarFavorito(livro: Livro): Observable<any> {
    return this.http.post(this.urlApiFavoritos, {
      'livro': livro.title   
    })
  }

  listarFavoritos(): Observable<any> {
    return this.http.get(this.urlApiFavoritos);
  }

}
