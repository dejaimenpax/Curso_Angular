import { Component, Input } from '@angular/core';

import { Twimp } from '../twimp.model';
import { TwimpService } from '../twimp.service';
import { Observable, from } from 'rxjs';
import { AuthenticationService } from '../../../core/authentication.service';

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

  handleFavorite(idTwimp: string){
    this.twimp.favorite ?
      this.twimpService.deleteFavorite(sessionStorage.getItem(sessionStorage.key(0)!)!,idTwimp).subscribe(() => 
        console.log("Favorito eliminado") 
      )
      :
      this.twimpService.setFavorite(sessionStorage.getItem(sessionStorage.key(0)!)!,idTwimp).subscribe(() => 
      console.log("Favorito añadido")   
      );

    this.twimp.favorite = !this.twimp.favorite;
  }
}
