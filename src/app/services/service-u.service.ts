import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUService {

  private defaultGateway = 'http://localhost:8080/userCom/';  // Remova o uso da variável id aqui

  constructor(private http: HttpClient) {}

  DadosUsers(id: string) {
    return this.http.get(`${this.defaultGateway}${id}`);
  }
  DadosMensagens() {
    return this.http.get(`http://localhost:8080/mensagens`);
  }
}
