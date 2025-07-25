import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TruncateDescriptionPipe } from './pipes/truncate-description.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LivroComponent } from './componentes/livro/livro.component';
import { ListaLivrosComponent } from './views/lista-livros/lista-livros.component';
import { ModalLivroComponent } from './views/modal-livro/modal-livro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutoriaPipe } from './pipes/autoria.pipe';
import { PaginatorModule } from 'primeng/paginator';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecuperacaoSenhaComponent } from './componentes/recuperacao-senha/recuperacao-senha.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AuthorizadedComponent } from './componentes/authorizaded/authorizaded.component';
import { AuthInterceptor } from './service/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    LivroComponent,
    ListaLivrosComponent,
    ModalLivroComponent,
    AutoriaPipe,
    TruncateDescriptionPipe,
    CadastroComponent,
    LoginComponent,
    RecuperacaoSenhaComponent,
    PerfilComponent,
    AuthorizadedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,

    PaginatorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [TruncateDescriptionPipe]
})
export class AppModule { }


