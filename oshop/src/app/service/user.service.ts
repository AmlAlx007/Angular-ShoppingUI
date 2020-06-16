import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AppUser } from '../model/App-User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  save(user: firebase.User)
  {
    this.db.object('/user/'+user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }

  read(user:firebase.User):AngularFireObject<AppUser>
  {
    return this.db.object('/user/'+user.uid);
  }

}
