import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this._userService.login(JSON.stringify(this.loginForm.value)).subscribe(
        data => {console.log(data); this._router.navigate(['/presidium']);
        }, 
        error => console.error(error)
      );
    } else {
      console.log('Form Invalid');
    }
  }

  register() {
    if (this.loginForm.valid) {
      this._userService.register(JSON.stringify(this.loginForm.value)).subscribe(
        data => {console.log(data); this._router.navigate(['/presidium']);}, 
        error => console.error(error)
      );
      console.log(JSON.stringify(this.loginForm.value));
    } else {
      console.log('Form Invalid');
    }
  }

}
