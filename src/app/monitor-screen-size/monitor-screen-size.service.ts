import {Injectable, NgZone} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitorScreenSizeService {

  public isLargeSizeWindow = true;
  constructor(private ngZone: NgZone) {
    window.onresize = () => {
      ngZone.run(() => {
        this.handleResizeWindow(window.innerWidth);
      });
    };
    this.handleResizeWindow(window.innerWidth);
  }
  private handleResizeWindow(width: number) {
    this.isLargeSizeWindow = 768 < width;
  }
}
