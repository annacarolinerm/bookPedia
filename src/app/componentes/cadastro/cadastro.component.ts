import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  confirmEmail: string = '';
  password: string = '';

  constructor(private router: Router) { }

  // Método chamado quando o formulário de cadastro é enviado
  onSubmit(): void {
    if (this.email !== this.confirmEmail) {
      alert('Os e-mails não coincidem!');
      return;
    }

    // Aqui você pode adicionar a lógica para salvar os dados de cadastro (API, etc.)
    console.log('Cadastro realizado com sucesso', this.nome, this.email, this.password);

    // Após o cadastro, redireciona para a página de login
    this.router.navigate(['/login']);
  }
}
