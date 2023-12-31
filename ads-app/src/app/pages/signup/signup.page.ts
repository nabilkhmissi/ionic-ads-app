import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router) { }

  email: string = ""
  password: string = ""
  name: string = ""
  phone: string = ""

  ngOnInit() {
  }

  register() {
    this._auth.register(this.email, this.password, this.name, this.phone).subscribe()
  }


  login() {
    this._router.navigateByUrl("/login")
  }

}
