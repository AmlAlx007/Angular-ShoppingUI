import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';

import { switchMap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private authService:AuthService, private userService:UserService, private route:Router) { 
  }

  canActivate():Observable<boolean>
  {
    return this.authService.appUsers$.pipe(map(
      appUser=> {
                  if(appUser.isAdmin)
                    return true
                 else
                 {
                   this.route.navigate(['/no-access'])
                   return false
                 }
      }
    ))
  }
}
