import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperacao-senha',
  templateUrl: './recuperacao-senha.component.html',
  styleUrls: ['./recuperacao-senha.component.css']
})
export class RecuperacaoSenhaComponent implements OnInit {
  email: string = '';  // Armazena o e-mail preenchido pelo usuário

  constructor() { }

  ngOnInit(): void {
  }

  // Método para manipular o envio do formulário
  onSubmit(): void {
    if (!this.email) {
      alert('Por favor, insira seu e-mail para recuperação de senha!');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação, como chamar um serviço
    console.log('Solicitação de recuperação enviada para o e-mail:', this.email);
    alert('Instruções de recuperação de senha foram enviadas para o seu e-mail.');
  }
}
