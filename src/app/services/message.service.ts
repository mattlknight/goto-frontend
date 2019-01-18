import { Injectable } from '@angular/core';
import { Message, MessageStatus } from '../common/index';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];

  constructor() { }

  genMessage() {
    this.messages.push({status: MessageStatus.Warning, title: "TestMessage", message: "This is just a test!"});
  }

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
