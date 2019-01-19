import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KeywordPair, KeywordFilter, MessageStatus } from '../common/index';
import { KEYWORD_PAIRS } from '../common/index';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(public messageService: MessageService) { }

  getKeywords(): Observable<KeywordPair[]> {
    return of(KEYWORD_PAIRS);
  }

  redirectToKeyword(keyword: KeywordPair): void {
      this.messageService.add({status: MessageStatus.Info, title: "KeywordService", message: "FIX ME, should log tracking and redirec to " + keyword.url });
  }
}
