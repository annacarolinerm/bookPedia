import { ListaLivrosComponent } from './views/lista-livros/lista-livros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecuperacaoSenhaComponent } from './componentes/recuperacao-senha/recuperacao-senha.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AuthorizadedComponent } from './componentes/authorizaded/authorizaded.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
    canActivate: [AuthGuard]
  },

  { path: 'cadastro', component: CadastroComponent },

  { path: 'login', component: LoginComponent },

  { path: 'authorized', component: AuthorizadedComponent },

  { path: 'recuperacao-senha', component: RecuperacaoSenhaComponent },

  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




