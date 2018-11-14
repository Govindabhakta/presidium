import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user

  constructor(private _userService: UserService, private _router: Router) {
    this._userService.user().subscribe(data => {
      this.user = data
    })
   }

  ngOnInit() {
  }

  logout() {
    this._userService.logout().subscribe(
      data => {console.log(data); this._router.navigate(['/'])},
      err => {console.error(err)}
    );
  }

}
