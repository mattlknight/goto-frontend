import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { KeywordPair, KeywordFilter, Message, MessageStatus } from '../common/index';
// import { KEYWORD_PAIRS } from '../common/index';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  private keywordsUrl = 'http://localhost:8080/api/keyword';

  constructor(private http: HttpClient,
              public messageService: MessageService) { }

  getKeywords(filter: KeywordFilter): Observable<KeywordPair[]> {
    return this.http.get<KeywordPair[]>(this.keywordsUrl, filter, httpOptions)
      .pipe(
        tap(_ => this.log({status: MessageStatus.Info, title: "KeywordService", message: "Fetched Keywords"})),
        catchError(this.handleError('getKeywords', []))
      );
  }

  getKeyword(keyword: string): Observable<KeywordPair> {
    const url = `${this.keywordsUrl}/${keyword}`;

    return this.http.get<KeywordPair>(url).pipe(
        tap(_ => this.log({status: MessageStatus.Info, title: "KeywordService", message: `Fetched Keyword ${keyword}`})),
        catchError(this.handleError<KeywordPair>(`getKeyword keyword=${keyword}`))
      );
  }

  redirectToKeyword(keyword: KeywordPair): void {
      this.messageService.add({status: MessageStatus.Info, title: "KeywordService", message: "FIX ME, should log tracking and redirec to " + keyword.url });
  }

  private log(message: Message) {
    this.messageService.add(message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log({status: MessageStatus.Danger, title: `${operation}`, message: `${error.message}` });

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
