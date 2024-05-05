import { Component, Input } from '@angular/core';

import { Twimp } from '../twimp.model';
import { TwimpService } from '../twimp.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrl: './twimp-card.component.css'
})
export class TwimpCardComponent {
  @Input() twimp!: Twimp;

  constructor(
    private twimpService: TwimpService
  ) {}

  handleFavorite(idUser: string, idTwimp: string){
    this.twimp.favorite ?
      this.twimpService.deleteFavorite('1',idTwimp).subscribe(() => 
        console.log("Favorito eliminado") 
      )
      :
      this.twimpService.setFavorite('1',idTwimp).subscribe(() => 
      console.log("Favorito añadido")   
      );

    this.twimp.favorite = !this.twimp.favorite;
  }
}
