import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TeladecadastroComponent } from './components/teladecadastro/teladecadastro.component';
import { TeladeloginComponent } from './components/teladelogin/teladelogin.component';
import { SobreNosComponent } from './pagina/sobre-nos/sobre-nos.component';
import { TeladeandamentoComponent } from './pagina/teladeandamento/teladeandamento.component';
import { HomeLogComponent } from './pagina/home-log/home-log.component';
import { HeaderLogComponent } from './components/header-log/header-log.component';
import { NotificacaoComponent } from './pagina/notificacao/notificacao.component';
import { AgendamentoComponent } from './pagina/agendamento/agendamento.component';


@NgModule({ declarations: [
        AppComponent,
        HomePrincipalComponent,
        TeladecadastroComponent,
        TeladeloginComponent,
        SobreNosComponent,
        TeladeandamentoComponent,
        TeladeloginComponent,
        HomeLogComponent,
        HeaderLogComponent,
        NotificacaoComponent,
        AgendamentoComponent

    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [
        provideClientHydration(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
