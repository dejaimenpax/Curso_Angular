import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthorService } from '../shared/author/author.service';

import { Author } from '../shared/author/author.model';

const isSessionStorageAvailable = typeof sessionStorage !== 'undefined';

@Component({
  selector: 'tweempus-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  idAuthor: string | null = null;
  author: Author | null = null;
  // observableId: Observable<{}> = null;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService) { }

  ngOnInit() {
    // this.observableId = this.route.params.pipe(
    //   switchMap((params: Params) => params['id']),
    // );
    // this.idAuthor = this.observableId.subscribe(id => id);
    if (isSessionStorageAvailable){
      this.idAuthor = sessionStorage.getItem(sessionStorage.key(0)!)!;
    }
    this.authorService.getAuthor(this.idAuthor!).subscribe(res => this.author = res);
  }

}
