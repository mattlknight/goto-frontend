import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { KeywordService }  from './keyword.service';
import { KeywordPair } from '../common';

@Injectable({
  providedIn: 'root'
})
export class KeywordDetailResolverService implements Resolve<KeywordPair> {

  constructor(private keywordService: KeywordService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KeywordPair> | Observable<never> {
    let keyword = route.paramMap.get('keyword');

    return this.keywordService.getKeyword(keyword).pipe(
      take(1),
      mergeMap(keywordPair => {
        if (keywordPair) {
          return of(keywordPair);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
