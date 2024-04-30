import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../shared/author/author.service';
import { Twimp } from '../shared/twimp/twimp.model';
import { TwimpService } from '../shared/twimp/twimp.service';
import { Observable, from } from 'rxjs';

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

    /*
    this.twimpService
      .getTwimps()
      .subscribe((twimps) => this.twimpList = twimps);
    */

    this.twimpService.getTwimps().subscribe(twimps => {
      //"from" create a suscribe for each element of the array
      from(twimps).subscribe(twimp => {
        this.authorService.getAuthor(twimp.author.id).subscribe(author => {
          twimp.author = author;
          this.twimpService.getFavoritesByAuthor('1', twimp.id).subscribe(favorite => {
            twimp.favorite = favorite;
            this.twimpList.push(twimp);
          });
        });
      });
    });
  }
}
