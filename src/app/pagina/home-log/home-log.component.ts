import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-log',
  templateUrl: './home-log.component.html',
  styleUrl: './home-log.component.css'
})
export class HomeLogComponent {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.adjustHeight();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.adjustHeight();
    }
  }

  adjustHeight() {
    if (isPlatformBrowser(this.platformId)) {
      const zoomLevel = Math.round(window.devicePixelRatio * 100);
      const secondDiv = document.getElementById('second');

      if (zoomLevel === 100) {
        if (secondDiv) {
          secondDiv.style.height = '102.5%';
        }
      } else if (zoomLevel === 90) {
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
}
