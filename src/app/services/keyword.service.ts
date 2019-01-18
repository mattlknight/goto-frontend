import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KeywordPair, KeywordFilter, MessageStatus } from '../common/index';
import { KEYWORD_PAIRS } from '../common/index';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private messageService: MessageService) { }

  getKeywords(): Observable<KeywordPair[]> {
    this.messageService.add({status: MessageStatus.Success, title: "KeywordService", message: "Fetched Keywords!"});
    return of(KEYWORD_PAIRS);
  }
}
