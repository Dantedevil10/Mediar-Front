import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-teladeandamento',
  templateUrl: './teladeandamento.component.html',
  styleUrl: './teladeandamento.component.css'
})
export class TeladeandamentoComponent {

  @ViewChild('teste') teste!: ElementRef;

  aberto:boolean=false;
  analise:boolean=false;
  fechado:boolean=false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.aberto && !this.fechado && !this.analise) {
      this.renderer.setStyle(this.teste.nativeElement, 'width', '14%');
    }else if (!this.aberto && !this.fechado && this.analise){
      this.renderer.setStyle(this.teste.nativeElement, 'width', '40%');
    }else if (!this.aberto && this.fechado && !this.analise){
      this.renderer.setStyle(this.teste.nativeElement, 'width', '80%');
    }
  }
}
