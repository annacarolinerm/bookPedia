import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Livro } from 'src/app/models/interfaces';

const body = document.querySelector("body");

@Component({
  selector: 'app-modal-livro',
  templateUrl: './modal-livro.component.html',
  styleUrls: ['./modal-livro.component.css']
})
export class ModalLivroComponent {

  @Input() livro: Livro;
  @Input() statusModal: boolean; // Recebe o status do modal do componente pai
  @Output() mudouModal = new EventEmitter<boolean>(); // Emite um valor booleano para o componente pai

  constructor() { }

  fecharModal() {
    this.statusModal = false;
    this.mudouModal.emit(this.statusModal); // Emite o evento com o valor do statusModal
    body.style.overflow = "scroll"; // Restaura o scroll do body ao fechar o modal
  }

  esconderScroll() {
    if (this.statusModal) {
      body.style.overflow = "hidden"; // Impede o scroll do body quando o modal está aberto
    }
  }

  lerPrevia() {
    window.open(this.livro.previewLink, '_blank');
  }

  ngOnChanges() {
    this.esconderScroll(); // Sempre que o statusModal mudar, ajusta o overflow
  }
}
