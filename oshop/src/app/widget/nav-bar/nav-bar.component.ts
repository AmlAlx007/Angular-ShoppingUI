import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  

  constructor(public auth:AuthService) { }


  ngOnInit(): void {
  }

  logout()
  {
    this.auth.logout()
  }
}
