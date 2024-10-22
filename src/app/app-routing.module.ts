import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { TeladecadastroComponent } from './components/teladecadastro/teladecadastro.component';
import { TeladeloginComponent } from './components/teladelogin/teladelogin.component';
import { TeladeandamentoComponent } from './components/teladeandamento/teladeandamento.component';
import { HomeLogComponent } from './pagina/home-log/home-log.component';
import { NotificacaoComponent } from './pagina/notificacao/notificacao.component';

const routes: Routes = [
  // Rota Principal Caso O Caminho Não Seja Encontrado
  { path: 'cadastro', component: TeladecadastroComponent},
  { path: 'login', component: TeladeloginComponent},
  { path: 'andamento', component: TeladeandamentoComponent},
  { path: 'home-log', component: HomeLogComponent},
  { path: 'noti', component: NotificacaoComponent},
  { path: '**', component: HomePrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
