import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { TeladecadastroComponent } from './components/teladecadastro/teladecadastro.component';
import { TeladeloginComponent } from './components/teladelogin/teladelogin.component';

const routes: Routes = [
  // Rota Principal Caso O Caminho Não Seja Encontrado
  { path: 'cadastro', component: TeladecadastroComponent},
  { path: 'login', component: TeladeloginComponent},
  { path: '**', component: HomePrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
