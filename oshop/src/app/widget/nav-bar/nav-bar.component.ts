import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/model/App-User';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  appUser:AppUser;

  constructor(private auth:AuthService) { 

    auth.appUsers$.subscribe(value=>this.appUser=value)    
  }


  ngOnInit(): void {
    
  }

  logout()
  {
    this.auth.logout()
  }
}
