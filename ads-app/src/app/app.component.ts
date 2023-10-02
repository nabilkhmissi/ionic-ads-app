import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _auth: AuthService) {
    _auth.getUserFromLS()
  }

  authUser$ = this._auth.authenticatedUser$


  ngOnInit(): void { }
  logout() {
    this._auth.logout()
  }

  handleClick() {
    console.log("aa")
  }
}
