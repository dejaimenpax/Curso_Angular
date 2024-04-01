import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  appValor: number = 3;

  eventListener(event: number): void {
    this.appValor = event;
  }
}
