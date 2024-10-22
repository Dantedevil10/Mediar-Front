import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { TeladecadastroComponent } from './components/teladecadastro/teladecadastro.component';
import { TeladeloginComponent } from './components/teladelogin/teladelogin.component';
import { HomeLogComponent } from './pagina/home-log/home-log.component';
import { NotificacaoComponent } from './pagina/notificacao/notificacao.component';
import { AgendamentoComponent } from './pagina/agendamento/agendamento.component';

const routes: Routes = [

  { path: 'cadastro', component: TeladecadastroComponent},
  { path: 'agendar', component: AgendamentoComponent},
  { path: 'login', component: TeladeloginComponent},
  { path: 'home-log', component: HomeLogComponent},
  { path: 'noti', component: NotificacaoComponent},
  { path: '**', component: HomePrincipalComponent },// Rota Principal Caso O Caminho Não Seja Encontrado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
