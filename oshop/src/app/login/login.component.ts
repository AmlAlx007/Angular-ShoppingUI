import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticate:AngularFireAuth, private router:Router) { }

  ngOnInit(): void {
  }

  loginAction()
  {
    this.authenticate.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)
    this.router.navigate(['/'])
  }

}
