import { Component } from '@angular/core';

@Component({
  selector: 'app-teladecadastro',
  templateUrl: './teladecadastro.component.html',
  styleUrl: './teladecadastro.component.css'
})
export class TeladecadastroComponent {

choosed:boolean = false;
acountD:string = '';

accounttype(acount:string){
  if(acount == "NORMAL"){
    this.acountD = acount
  }else{
    this.acountD = "MEDIADOR"
  }
  this.choosed = true
  console.log(this.acountD)
}


}
