import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-log',
  templateUrl: './home-log.component.html',
  styleUrl: './home-log.component.css'
})
export class HomeLogComponent {




  ngOnInit() {
    this.adjustHeight();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustHeight();
  }
  adjustHeight() { //essa função ajusta o template de acordo com o zoom do navegador
    const zoomLevel = Math.round(window.devicePixelRatio * 100);
    const secondDiv = document.getElementById('second');

    if (zoomLevel === 100) {
      if (secondDiv) {
        secondDiv.style.height = '102.5%';
      }
    } else if (zoomLevel === 90){
      if (secondDiv) {
        secondDiv.style.height = '114%';
      }
    } else {
      if (secondDiv) {
        secondDiv.style.height = '129%';
      }
    }
  }


}
