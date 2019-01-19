import { MessageStatus } from './message-status';

export class Message {
  status: MessageStatus;
  title: string;
  message: string;
  buttonTitle?: string;
  buttonLink?: string;
  open?: boolean;
}
