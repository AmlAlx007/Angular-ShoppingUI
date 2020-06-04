import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService, private router:Router){
    auth.userDetails$.subscribe(user => {
      if(user)
        this.router.navigate([localStorage.getItem('returnUrl')])
    })

  }
}
