import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../shared/author/author.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    /*Observable needs subscribe, creating a channel between the Observable and
    whoever is consuming the Observable. Unsuscribe is recommended if we open
    several channels
    */
   
    this.authorService.getAuthor('1').subscribe(author => console.log(author));
    //this.authorService.getAuthor('h').subscribe(author => console.log(author));
  }
}
