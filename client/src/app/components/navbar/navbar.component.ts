import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ UserService ]
})
export class NavbarComponent implements OnInit {

  class = ['Delegate', 'Backroom', 'God']
  loggedIn: boolean
  permissions = 0
  country: String

  constructor(private _user: UserService) {
    this._user.user().subscribe( 
      data => {this.handleData(data)}, 
      err => {console.log(err)})
  }

  ngOnInit() {

  }

  handleData(data) {
    // localStorage.setItem('country', data.country)
    if(data.country != '') {
      this.loggedIn = true;
      this.country = data.country
    }

    this.permissions = data.permissions
    console.log(this.permissions)
  }

}
