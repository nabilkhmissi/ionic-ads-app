import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }

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
