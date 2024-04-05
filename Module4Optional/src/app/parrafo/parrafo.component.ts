import { Component } from "@angular/core";

@Component({
  selector: 'app-parrafo',
  templateUrl: './parrafo.component.html',
  styleUrl: './parrafo.component.css'
})
export class ParrafoComponent {

  number_decimalPipe: number = 123.4567;
  animals: string[] = ['Cat', 'Dog', 'Whale', 'Horse'];
  price: number = 345.16;
  date: Date = new Date('01/01/2024');

}
