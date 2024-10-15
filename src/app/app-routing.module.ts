import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';

const routes: Routes = [
  { path: '**', component: HomePrincipalComponent }, // Rota Principal Caso O Caminho Não Seja Encontrado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
