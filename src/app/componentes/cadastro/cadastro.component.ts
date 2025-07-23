import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router
import { Observable } from 'rxjs';

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

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  // Método chamado quando o formulário de cadastro é enviado
  onSubmit(): void {
    if (this.email !== this.confirmEmail) {
      alert('Os e-mails não coincidem!');
      return;
    }

    this.cadastrar(this.email, this.password, this.nome).subscribe({
      next: () => {
        this.router.navigate(['/login'])
      },
      error: () => console.log('teste')
    });

    // Após o cadastro, redireciona para a página de login
    
  }

  cadastrar(email: string, senha: string, nome: string): Observable<any> {
    return this.http.post('http://localhost:8080/usuario', {
      email,
      senha,
      nome
    });
  }

}
