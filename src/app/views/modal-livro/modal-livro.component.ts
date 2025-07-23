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
  @Input() statusModal: boolean; 
  @Output() mudouModal = new EventEmitter<boolean>(); 

  constructor() { }

  fecharModal() {
    this.statusModal = false;
    this.mudouModal.emit(this.statusModal);
    body.style.overflow = "scroll"; 
  }

  esconderScroll() {
    if (this.statusModal) {
      body.style.overflow = "hidden"; 
    }
  }

  lerPrevia() {
    window.open(this.livro.previewLink, '_blank');
  }

  ngOnChanges() {
    this.esconderScroll();
  }
}
