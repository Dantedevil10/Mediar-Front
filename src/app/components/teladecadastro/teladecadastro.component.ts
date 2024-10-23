import { Component } from '@angular/core';

@Component({
  selector: 'app-teladecadastro',
  templateUrl: './teladecadastro.component.html',
  styleUrl: './teladecadastro.component.css'
})
export class TeladecadastroComponent {

choosed:boolean = false;
acountD:string = ''; //Essa Variavel Vai Guardar o valor do tipo de conta

accounttype(acount:string){
  this.acountD = acount.valueOf()
  this.choosed = true
  console.log(this.acountD)
}
backtochoose(){
  this.choosed = false
  this.acountD = ''
  console.log(this.acountD)
}


}
