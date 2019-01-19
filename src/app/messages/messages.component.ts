import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Message } from '../common/index';
import { MessageService } from '../services/index';

@Component({
  selector: 'app-messages',
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity:0}),
        animate('1s', style({opacity:1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('1s', style({opacity:0}))
      ])
    ])
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  hideMessage(message: Message): void {
    message.open = false;
  }

  closeMessage(message: Message, event: AnimationEvent): void {
    if (message.open === false) {
      this.messageService.close(message);
    }
  }

}
