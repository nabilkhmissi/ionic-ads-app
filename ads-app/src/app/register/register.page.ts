import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private _auth: AuthService) { }

  email: string = ""
  password: string = ""
  name: string = ""

  ngOnInit() {
  }


  register() {
    this._auth.register(this.email, this.password, this.name).subscribe()
  }

}
