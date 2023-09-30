import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }


  email: string = "";
  password: string = "";

  ngOnInit() {
  }

  doLogin() {
    this._auth.login(this.email, this.password).subscribe();
  }

  doRegister() {
    this._router.navigateByUrl("register")
  }

}
