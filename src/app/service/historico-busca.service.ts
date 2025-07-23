import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoBuscaService {

  private urlApiFavoritos: string = 'http://localhost:8080/usuario/buscas'

  constructor(
    private http: HttpClient
  ) { }


  registar(consulta: string): Observable<any> {
    return this.http.post(this.urlApiFavoritos, { consulta });
  }

  listar(): Observable<any> {
    return this.http.get(this.urlApiFavoritos);
  }

}
