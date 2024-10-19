import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TeladecadastroComponent } from './components/teladecadastro/teladecadastro.component';
import { TeladeloginComponent } from './components/teladelogin/teladelogin.component';
import { HomeLogComponent } from './pagina/home-log/home-log.component';
import { HeaderLogComponent } from './components/header-log/header-log.component';

@NgModule({ declarations: [
        AppComponent,
        HomePrincipalComponent,
        TeladecadastroComponent,
        TeladeloginComponent,
        HomeLogComponent,
        HeaderLogComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [
        provideClientHydration(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
