import { Component, OnInit, Input } from '@angular/core';
import { KeywordPair } from '../common';

@Component({
  selector: 'app-keyword-detail',
  templateUrl: './keyword-detail.component.html',
  styleUrls: ['./keyword-detail.component.scss']
})
export class KeywordDetailComponent implements OnInit {

  @Input() keyword: KeywordPair;

  constructor() { }

  ngOnInit() {
  }

}
