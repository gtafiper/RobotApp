export class ChatMessage
{
  uid?: string;
  userName?: string;
  message?: string;
  timeSend?: Date = new Date();
  email?: string;
}
