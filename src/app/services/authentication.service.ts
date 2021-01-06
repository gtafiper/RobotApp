import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import {AuthUser} from '../Models/users/Shared/user';
import {switchMap} from 'rxjs/operators';
import firebase from 'firebase';
import {roles} from '../../environments/environment';
import {firebaseConfig} from '../../environments/firebaseConfig';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authUser$: Observable<AuthUser>;

  constructor(public afAuth: AngularFireAuth, private fs: AngularFirestore, private router: Router) {

    this.authUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.fs.doc<AuthUser>(`Users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }


  UpdateUserInfo(user: AuthUser): Promise<any> {
    return this.fs.doc(`Users/${user.uid}`).update(user);
  }

  // tslint:disable-next-line:typedef
  signOut() {
    return this.afAuth.signOut();
    this.authUser$ = null;
  }


  // tslint:disable-next-line:typedef
  async signInEmail(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);

  }

  // tslint:disable-next-line:typedef
  async createUserWithEmailAndPassword(email: string, password: string, user: AuthUser) {

    const app2 = firebase.initializeApp(firebaseConfig, 'temp');
    const cred = await app2.auth().createUserWithEmailAndPassword(email, password);
    await app2.delete();

    return this.fs.doc(`Users/${cred.user.uid}`).set({
      email: cred.user.email,
      name: user.name,
      role: roles.robot,

    });

  }

}
