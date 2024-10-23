import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrl: './home-principal.component.css'
})
export class HomePrincipalComponent {

  @ViewChild('funcionamento', { static: false }) funcionamentoSection!: ElementRef;

  scrollToFuncionamento() {
    this.funcionamentoSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
