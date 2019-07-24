import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angularx';

  // @ViewChild('document') documentx: ElementRef; 
  //https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide
  
  fullScreen() {
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen ||
      elem.webkitRequestFullScreen || elem['mozRequestFullscreen']
      ||
      elem['msRequestFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }

  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  @HostListener('document:fullscreenchange', ['$event'])  
  onkeydown(event){
    
    if(document.webkitIsFullScreen || document.mozFullScreen ||document.fullscreenElement || document.msFullscreenElement ){
      console.log('fullscreenmode');
    }
    else{
      console.log('not fullscreen mode');
    }
  }
}
