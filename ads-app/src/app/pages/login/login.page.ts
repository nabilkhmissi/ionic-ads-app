import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _alert: AlertService) { }
  email: string = "";
  password: string = "";

  ngOnInit() {
  }

  doLogin() {
    this._auth.login(this.email, this.password).subscribe();
  }

  doRegister() {
    this._router.navigateByUrl("signup")
  }

}
