import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
// import { Observable, of, interval } from 'rxjs';
import { KeywordPair } from '../common';
// import { KeywordService, MessageService } from '../services';

@Component({
  selector: 'app-keyword-edit',
  templateUrl: './keyword-edit.component.html',
  styleUrls: ['./keyword-edit.component.scss']
})
export class KeywordEditComponent implements OnInit {
  keyword: KeywordPair;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { keyword: KeywordPair }) => {
      this.keyword = data.keyword;
    });
  }

}
