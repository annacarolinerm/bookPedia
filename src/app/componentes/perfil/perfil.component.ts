import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { FavoritoService } from 'src/app/service/favorito.service';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  activeTab: string = 'favorites'; 

  nome: string = '';
  email: string = '';

  favoritos: LivroVolumeInfo[] = [];

  constructor(
    private http: HttpClient,
    private favoritoService: FavoritoService,
    private service: LivroService
  ) { }

  ngOnInit(): void {
    this.buscarInfoUsuario().subscribe({
      next: (response) => {
        this.nome = response.nome
        this.email = response.email;
      }
    });

    this.listarMeufavoritos();
  }

  buscarInfoUsuario(): Observable<any> {
    return this.http.get('http://localhost:8080/usuario');
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  listarMeufavoritos() {
  this.favoritoService.listarFavoritos().pipe(
    switchMap((favoritos) => {
      const requisicoes = favoritos.map((item: any) => {
        return this.buscarLivros(item.livro, 0).pipe( // ✅ retorno do observable
          map((resultado) => resultado.items?.[0])     // ✅ retorno do item
        );
      });

      return forkJoin(requisicoes); 
    }),
    map((itemsValidos: Item[]) => this.livrosResultadoParaLivros(itemsValidos)) 
  ).subscribe({
    next: (livros: LivroVolumeInfo[]) => {
      this.favoritos = livros;
    },
    error: (err) => {
      console.error('Erro ao buscar favoritos:', err);
    }
  });
}

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
      return items.map((item) => new LivroVolumeInfo(item));
  }

  buscarLivros(valorDigitado: string, startIndex: number) {
    return this.service.buscar(valorDigitado, startIndex, 1);
  }

}
