import { Component, OnInit } from '@angular/core';
import { KeywordPair } from '../common/index';
import { KeywordService } from '../services/index';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {
  keywords: KeywordPair[];
  selectedKeyword: KeywordPair;

  constructor(private keywordService: KeywordService) { }

  ngOnInit() {
    this.getKeywords();
  }

  getKeywords(): void {
    this.keywordService.getKeywords()
        .subscribe(keywords => this.keywords = keywords);
  }

  onSelect(keyword: KeywordPair): void {
    this.selectedKeyword = keyword;
  }

}
