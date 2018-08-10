import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';


import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    // @ts-ignore
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string): Promise<any> {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<any> {
    return (this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password));
  }

  logout(): Promise<any> {
    return this.firebaseAuth
      .auth
      .signOut();
  }

}
