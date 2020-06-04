import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  userDetails$:Observable<firebase.User>

  userDetails:firebase.User
  constructor(private authenticate:AngularFireAuth) { 
    this.userDetails$=authenticate.authState;
  }

  ngOnInit(): void {
  }

  logout()
  {
    this.authenticate.auth.signOut();
  }
}
