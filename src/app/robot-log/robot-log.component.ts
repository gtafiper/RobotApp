import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service';
import {Observable} from 'rxjs';
import {ChatMessage} from '../Models/message/cheatMessage';
import {RobotService} from '../services/robot.service';
import {AuthUser} from '../Models/users/Shared/user';

@Component({
  selector: 'app-robot-log',
  templateUrl: './robot-log.component.html',
  styleUrls: ['./robot-log.component.css']
})
export class RobotLogComponent implements OnInit {

nameOfRobot: string;
limit: number;
robots: Observable<AuthUser[]>;
messages: Observable<ChatMessage[]>;

  constructor(private chatService: ChatService, private robotService: RobotService) { }

  ngOnInit(): void {
    this.robots = this.robotService.getAllRobots();

  }

  // tslint:disable-next-line:typedef
  searchRobot(){
   this.messages = this.chatService.getAllMessagesFromUser(this.nameOfRobot, this.limit);
  }

  // tslint:disable-next-line:typedef
  getDateFromEpoc(epoc: number){
     const date = new Date(epoc * 1000);
     return date;
  }
}
