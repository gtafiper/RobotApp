import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-robot-chat',
  templateUrl: './robot-chat.component.html',
  styleUrls: ['./robot-chat.component.css']
})
export class RobotChatComponent implements OnInit {

  message: string;

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  send() {
    this.chat.sendMessage(this.message);
    this.message = '';
  }


}
