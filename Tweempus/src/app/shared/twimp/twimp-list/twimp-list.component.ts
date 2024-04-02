import { Component, OnInit } from '@angular/core';

import { Twimp } from '../twimp.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrl: './twimp-list.component.css'
})
export class TwimpListComponent implements OnInit{
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sodales libero, sit amet posuere arcu consecteturut. Nam volutpat ligula ac nunc consectetur vestibulum.';
  twimps: Twimp[] = [];
  authors: Author[] = [];

  ngOnInit(){
    this.authors.push(new Author('1', 'Juan'));
    this.authors.push(new Author('2', 'José'));
    this.authors.push(new Author('3', 'María'));
    this.authors.push(new Author('4', 'Sara'));
    this.twimps.push(new Twimp('1', '', this.authors[0], this.text, '01/01/2024'));
    this.twimps.push(new Twimp('2', '', this.authors[1], this.text, '01/01/2024'));
    this.twimps.push(new Twimp('3', '', this.authors[2], this.text, '01/01/2024'));
    this.twimps.push(new Twimp('4', '', this.authors[3], this.text, '01/01/2024'));
  }
}
