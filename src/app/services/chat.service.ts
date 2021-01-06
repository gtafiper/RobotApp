import { Injectable } from '@angular/core';
import {ChatMessage} from '../Models/message/cheatMessage';
import * as firebase from 'firebase/app';
import {AngularFireList, AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {AuthUser} from '../Models/users/Shared/user';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatMessages: AngularFirestoreCollection<ChatMessage>;
  chatMessage: ChatMessage;
  userName: string;
  user: AuthUser;

  constructor(private db: AngularFirestore, private auth: AuthenticationService) {
    const sub = this.auth.authUser$.subscribe(value => {
      this.user = value;
  });

  }


  // tslint:disable-next-line:typedef
  sendMessage(msg: string) {
    console.log(this.user);
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.add({
      message: msg,
      timeSend: timestamp,
      email,
      userName: this.user.name

    });
  }

  getMessages(): AngularFirestoreCollection<ChatMessage> {
   return this.db.collection(`messages`);
  }

  getAllMessagesFromUser(userName: string, limit: number): Observable<ChatMessage[]>{
    return this.db.collection<ChatMessage>('messages', ref => ref.where('userName', '==', userName).orderBy('timeSend', 'desc').limit(limit))
      .stateChanges().pipe(map(
      respons => {
        const newArray: ChatMessage[] = [];
        respons.forEach(
          doc => {
            const un = doc.payload.doc.data() as ChatMessage;
            un.userName = doc.payload.doc.id;
            newArray.push(un);
          });
        return newArray;
          }
        ));
      }


  getTimeStamp(): Date {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();

    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();
    return now;
  }

}

