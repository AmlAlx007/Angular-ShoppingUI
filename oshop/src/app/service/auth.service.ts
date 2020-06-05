import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUser } from '../model/App-User';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userDetails$:Observable<firebase.User>
  constructor(private authenticate:AngularFireAuth, 
              private router:ActivatedRoute, 
              private route:Router,
              private userService:UserService) 
              { 
                  this.userDetails$=authenticate.authState;
              }

  login()
  {
    let returnUrl=this.router.snapshot.queryParamMap.get('returnUrl') || '/'
    console.log(returnUrl)
    localStorage.setItem('returnUrl',returnUrl)
    this.authenticate.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)
  }

  logout()
  {
    this.authenticate.auth.signOut();
  }

  get appUsers$():Observable<AppUser>
  {
    return this.userDetails$.pipe(
      switchMap(user => {
              if(user) return this.userService.read(user).valueChanges();
              else return of(null);
      }));
  }
}
