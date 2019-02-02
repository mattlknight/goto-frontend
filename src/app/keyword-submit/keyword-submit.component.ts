import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of, interval } from 'rxjs';
import { KeywordPair, KeywordFilter, MessageStatus } from '../common';
import { KeywordService, MessageService } from '../services';

@Component({
  selector: 'app-keyword-submit',
  templateUrl: './keyword-submit.component.html',
  styleUrls: ['./keyword-submit.component.scss']
})
export class KeywordSubmitComponent implements OnInit {
  postedKeyword: KeywordPair;

  constructor(private keywordService: KeywordService) { }

  ngOnInit() {
  }

  keywordForm = new FormGroup({
    keyword: new FormControl(''),
    url: new FormControl(''),
  });

  postKeyword(): void {
    // let keyword = {keyword: this.keywordForm.keyword, url: this.keywordForm.url};
    this.keywordService.postKeyword(this.keywordForm.value)
        .subscribe(postedKeyword => this.postedKeyword = postedKeyword);
  }

}
