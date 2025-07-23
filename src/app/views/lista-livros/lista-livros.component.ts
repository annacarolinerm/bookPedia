import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap, map, catchError, throwError } from 'rxjs';
import { Item, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';
import { ViewportScroller } from '@angular/common';
import { HistoricoBuscaService } from 'src/app/service/historico-busca.service';

const PAUSA = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();
  mensagemErro = '';
  livrosResultado: LivrosResultado;
  listaLivros: LivroVolumeInfo[] = [];
  
  // Variáveis para paginação
  paginaAtual = 0;
  resultadosPorPagina = 10;
  totalDeResultados = 0;

  constructor(private service: LivroService, 
    private viewportScroller: ViewportScroller,
    private historicoService: HistoricoBuscaService
  ) { }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    tap(() => {
      this.paginaAtual = 0; // Reseta para a primeira página em cada nova busca
    }),
    switchMap((valorDigitado) => {
      this.historicoService.registar(valorDigitado).subscribe({
        next: () => console.log('deu certo')
      })
      return this.buscarLivros(valorDigitado, this.paginaAtual * this.resultadosPorPagina);
  
    }
    ),
    map((resultado) => {
      this.totalDeResultados = resultado.totalItems;
      return resultado.items || [];
    }),
    map((items) => this.listaLivros = this.livrosResultadoParaLivros(items)),
    catchError((erro) => {
      console.error(erro);
      this.mensagemErro = 'Ops, ocorreu um erro! Recarregue a aplicação!';
      return throwError(() => new Error(this.mensagemErro));
    })
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => new LivroVolumeInfo(item));
  }

  buscarLivros(valorDigitado: string, startIndex: number) {
    return this.service.buscar(valorDigitado, startIndex, this.resultadosPorPagina);
  }

  mudarPagina(event: { first: number; rows: number; page: number; pageCount: number }) {
    this.paginaAtual = event.page;

    // Rola para o topo da página
    this.viewportScroller.scrollToPosition([0, 0]);

    this.buscarLivros(this.campoBusca.value, this.paginaAtual * this.resultadosPorPagina).subscribe((resultado) => {
      this.listaLivros = this.livrosResultadoParaLivros(resultado.items || []);
    });
  }
}
