import { UserService } from './service/user.service';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService, private router:Router, private userService:UserService){
    auth.userDetails$.subscribe(user => {
      if(user)
        userService.save(user)
        this.router.navigate([localStorage.getItem('returnUrl')])
    })

  }
}
