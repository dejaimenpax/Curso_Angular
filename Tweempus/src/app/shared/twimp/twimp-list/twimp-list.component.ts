import { Component, Input} from '@angular/core';

import { Twimp } from '../twimp.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrl: './twimp-list.component.css'
})
export class TwimpListComponent {
  @Input() 
  twimps!: Twimp[];

}
