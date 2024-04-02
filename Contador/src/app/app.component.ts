import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appValor: number = 3;

  eventListener(event: number): void {
    this.appValor = event;
  }
}
