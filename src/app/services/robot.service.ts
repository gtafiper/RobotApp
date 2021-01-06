import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AuthUser} from '../Models/users/Shared/user';
import {map} from 'rxjs/operators';
import {roles} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private fs: AngularFirestore, private auth: AuthenticationService) {

  }


  getAllRobots(): Observable<AuthUser[]> {
    return this.fs.collection<AuthUser>('Users', ref => ref.where('role', '==', roles.robot)).snapshotChanges().pipe(map(r => {
      const newArray: AuthUser[] = [];
      r.forEach(doc => {
        const user = doc.payload.doc.data();
        const id = doc.payload.doc.id;
        newArray.push({
          email: user.email,
          name: user.name,
          role: user.role,
          uid: id,
        });
      });
      return newArray;
    }));
  }

  // tslint:disable-next-line:typedef
  async addRobtUser(email: string, password: string, user: AuthUser) {
    await this.auth.createUserWithEmailAndPassword(email, password, user);
  }

  async deleteRobot(user: AuthUser): Promise<any> {
    await this.fs.doc(`Users/${user.uid}`).delete();
  }


}
