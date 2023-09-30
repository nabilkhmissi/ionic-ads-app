import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _auth: AuthService, private _router: Router, private _activatedRoute: ActivatedRoute, private _alert: AlertService) { }


  email: string = "";
  password: string = "";

  message = this._activatedRoute.queryParams.pipe(
    map(route => route['message']),
    tap(message => {
      if (message) {
        this._alert.showNotification(message)
      }
    })
  ).subscribe()


  ngOnInit() {
  }

  doLogin() {
    this._auth.login(this.email, this.password).subscribe();
  }

  doRegister() {
    this._router.navigateByUrl("register")
  }

}
