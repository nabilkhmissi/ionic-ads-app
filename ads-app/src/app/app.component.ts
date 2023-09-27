import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _auth: AuthService) {
    _auth.getUserFromLS()
  }

  authUser: User | null = null


  ngOnInit(): void {
    this._auth.authenticatedUser$.subscribe(
      data => this.authUser = data
    )
  }
  logout() { 
    this._auth.logout()
  }
}
