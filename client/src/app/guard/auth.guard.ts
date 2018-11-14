import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: UserService, private _router: Router) {
    this._auth.user().subscribe( data => {
      this.loggedIn(data)  
    }) 
  }

  logged: boolean

  loggedIn(user) {
    if(user != '') {
      this.logged = true
    } else {
      this.logged = false
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (this.logged) {
       return true
     } else {
       this._router.navigate(['/'])
       return false
     }
  }
}
