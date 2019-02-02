import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { KeywordPair, MessageStatus } from '../common';
import { KeywordService, MessageService } from '../services';

@Component({
  selector: 'app-keyword-edit',
  templateUrl: './keyword-edit.component.html',
  styleUrls: ['./keyword-edit.component.scss']
})
export class KeywordEditComponent implements OnInit {

  constructor(private keywordService: KeywordService, public messageService: MessageService) { }

  ngOnInit() {
  }

}
