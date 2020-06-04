import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userDetails$:Observable<firebase.User>
  constructor(private authenticate:AngularFireAuth, private router:ActivatedRoute, private route:Router) { 
    this.userDetails$=authenticate.authState;
    this.userDetails$.subscribe(res=>console.log(res))
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
}
