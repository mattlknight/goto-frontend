import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { KeywordPair, KeywordFilter, MessageStatus } from '../common';
import { KeywordService, MessageService } from '../services';

const secondsCounter = interval(10000);

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {
  limit: number;
  sort_asc: boolean;
  keywords: KeywordPair[];
  selectedKeyword: KeywordPair;

  constructor(private keywordService: KeywordService, public messageService: MessageService) { }

  ngOnInit() {
    this.limit = 5;
    this.sort_asc = true;
    this.getKeywords();
    secondsCounter.subscribe( () => {
      this.getKeywords();
    })
  }

  getKeywords(): void {
    this.keywordService.getKeywords({limit: this.limit, sort_asc: this.sort_asc})
        .subscribe(keywords => this.keywords = keywords);
  }

}
