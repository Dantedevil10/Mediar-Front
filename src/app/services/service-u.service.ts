import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUService {

  private id = "6e3febaf-fdb7-42e3-8b76-9edbbcc6cf65";
  private defaultGateway = `http://localhost:8080/userCom/${this.id}`;

  constructor( private http:HttpClient ) {}

  DadosUsers(){
    return this.http.get(this.defaultGateway);
  }
}
