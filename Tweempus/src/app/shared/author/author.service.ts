import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, catchError, map, throwError } from 'rxjs';

import { Author } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url: string = 'http://localhost:3000/authors';

  constructor(private httpClient: HttpClient) { }

  getAuthor(id: string): Observable<Author> {
    //we return an Observable because we're gonna concatenate several calls
    let author: Author;

    //get petition
    return this.httpClient.get<Author>(this.url + '/' + id).pipe(
      map(dbAuthor => {
        author = new Author(dbAuthor.id, dbAuthor.fullName);
        author.image = dbAuthor.image;
        author.url = 'http://localhost:4200/author/'+dbAuthor.id;
        return author;
      }),
      catchError(this.handleError)
    );

  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message : 
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //errMsg = 'This is an error';
    console.error(errMsg);
    return throwError(() => errMsg);
  }
}
