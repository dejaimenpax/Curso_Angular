import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../shared/author/author.service';
import { Twimp } from '../shared/twimp/twimp.model';
import { TwimpService } from '../shared/twimp/twimp.service';
import { Observable, from } from 'rxjs';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  twimpList: Twimp[] = [];

  constructor(
    //declarated in constructor in order t be seen from the dependencies injector
    private authorService: AuthorService,
    private twimpService: TwimpService,
    private authService: AuthenticationService
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

          this.twimpService.getFavoritesByAuthor(this.authService.token!.idAuthor, twimp.id).subscribe(favorite => {
            twimp.favorite = favorite;
            this.twimpList.push(twimp);
          });
        });
      });
    });
  }
}
