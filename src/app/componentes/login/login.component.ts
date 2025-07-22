import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }
    
    // Aqui você pode adicionar a lógica de autenticação (verificar credenciais)

    // Após o login bem-sucedido, redirecionar para a página de perfil
    this.router.navigate(['/perfil']);
  }
}
