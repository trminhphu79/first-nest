import { MessageDto } from '../message.dto';

export interface IMessageCreatePayload extends Omit<MessageDto, 'id'> {}

export interface IMessageUpdatePayload extends MessageDto {}

export interface IMessageDeletePayload {
  id: number;
}

export interface IMessageGetDetailPayload {
  id: number;
}
