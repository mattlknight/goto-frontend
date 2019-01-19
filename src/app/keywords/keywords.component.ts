import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { KeywordPair, MessageStatus } from '../common/index';
import { KeywordService, MessageService } from '../services/index';

const secondsCounter = interval(10000);

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {
  keywords: KeywordPair[];
  selectedKeyword: KeywordPair;

  constructor(private keywordService: KeywordService, public messageService: MessageService) { }

  ngOnInit() {
    this.getKeywords();
    secondsCounter.subscribe( () => {
      this.getKeywords();
    })
  }

  getKeywords(): void {
    this.keywordService.getKeywords()
        .subscribe(keywords => {
          this.keywords = keywords;
        }, err => {
          console.error(`Error updating KeywordsComponent.keywords ${err}`);
          this.messageService.add({status: MessageStatus.Danger, title: "KeywordService", message: `Error updating KeywordsComponent.keywords ${err}`});
        }, () => {
          console.log("Updated KeywordsComponent.keywords");
          this.messageService.add({status: MessageStatus.Success, title: "KeywordService", message: "Fetched Keywords!"});
        });
  }

}
