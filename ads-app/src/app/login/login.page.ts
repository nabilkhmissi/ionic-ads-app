import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _auth: AuthService) { }


  email: string = "";
  password: string = "";

  ngOnInit() {
  }

  doLogin() {
    console.log(this.email)
    console.log(this.password)
    this._auth.login(this.email, this.password).subscribe();
  }

}
