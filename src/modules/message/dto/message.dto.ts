export class MessageDto {
  id: number;
  userId: string;
  title: string;
  body: string;
  data: string;
  token: string;
  subComment: Array<MessageDto>;
}
