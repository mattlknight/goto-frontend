import { Injectable } from '@angular/core';
import { Message } from '../common/index';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];

  constructor() { }

  add(message: Message) {
    this.messages.push(message);
  }

  close(message: Message) {
    const index = this.messages.indexOf(message)
    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }
}
