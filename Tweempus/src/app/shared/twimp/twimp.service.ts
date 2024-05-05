import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Author } from '../author/author.model';
import { Twimp } from './twimp.model';

@Injectable()
export class TwimpService {

  private url: string = 'http://localhost:3000/twimps';
  private urlFavorite: string = 'http://localhost:3000/author-favorites';

  constructor(private httpClient: HttpClient) { }

  getTwimps(): Observable<Twimp[]> {
    let twimps: Twimp[] = [];

    return this.httpClient.get(this.url).pipe(
      map((dbTwimpList: any) => {
        for (let i in dbTwimpList) {
          let twimp: Twimp = new Twimp(dbTwimpList[i].id, 'localhost:4200/twimp/' + dbTwimpList[i].id, new Author(dbTwimpList[i].author), dbTwimpList[i].content, dbTwimpList[i].timestamp);
          twimps.push(twimp);
        }
        return twimps;
      }),
      catchError(this.handleError)
    );
  }

  getFavoritesByAuthor(idAuthor: string, idTwimp: string): Observable<boolean> {
    return this.httpClient.get(this.urlFavorite + '/' + idAuthor).pipe(
      map((response: any) => {
        let favorites: string[] = response['twimps'];
        return favorites.indexOf(idTwimp) !== -1;
      }),
      catchError(this.handleError)
    );
  }

  setFavorite(idAuthor: string, idTwimp: string): Observable<boolean> {
    const urlAux = this.urlFavorite + '/' + idAuthor;

    return this.httpClient.get(urlAux).pipe(
      switchMap((response: any) => {
        let favorites: string[] = response['twimps'];
        favorites.push(idTwimp);
        response['twimps'] = favorites;
        return this.httpClient.put(urlAux, response).pipe(
          map(() => {
            console.log("Entra al put del setFavorite");
            return true;
          }),
          catchError(this.handleError)
        );
      }),
      catchError(this.handleError)
    );
    
  }

  deleteFavorite(idAuthor: string, idTwimp: string): Observable<boolean> {
    const urlAux = this.urlFavorite + '/' + idAuthor;

    return this.httpClient.get(urlAux).pipe(
      switchMap((response: any) => {
        let favorites: string[] = response['twimps'];
        response['twimps'] = favorites.filter(x => x !== idTwimp);
        return this.httpClient.put(urlAux, response).pipe(
          map(() => {
            return true;
          }),
          catchError(this.handleError)
        );
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
