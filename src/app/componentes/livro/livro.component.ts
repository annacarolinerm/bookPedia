import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/models/interfaces';
import { FavoritoService } from 'src/app/service/favorito.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {

  @Input() livro: Livro;
  modalAberto: boolean = false;

  constructor(
    private favoritoService: FavoritoService
  ) {}

  onModalChange(evento: boolean) {
    this.modalAberto = evento;
  }

  adicionarAoFavorito() {
    this.favoritoService.adicionarFavorito(this.livro).subscribe({
      next: () => alert('Livro adicionado aos favoritos'),
      error: () => console.log('erro')
    });
  }

}
