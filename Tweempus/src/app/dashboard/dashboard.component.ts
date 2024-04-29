import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../shared/author/author.service';
import { Twimp } from '../shared/twimp/twimp.model';
import { TwimpService } from '../shared/twimp/twimp.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  twimpList: Twimp[] = [];

  constructor(
    private authorService: AuthorService,
    private twimpService: TwimpService
  ) {}

  ngOnInit(): void {
    /*Observable needs subscribe, creating a channel between the Observable and
    whoever is consuming the Observable. Unsuscribe is recommended if we open
    several channels
    */

    /*
    this.authorService
      .getAuthor('1')
      .subscribe((author) => console.log(author));
    */
    this.twimpService
      .getTwimps()
      .subscribe((twimps) => this.twimpList = twimps);
  }
}
