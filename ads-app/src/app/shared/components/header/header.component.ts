import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  @Input() title = "Home"
  @Input() logoutBtn = false;

  authUser$ = this._auth.authenticatedUser$;

  ngOnInit() {

  }
  logout() {
    this._auth.logout()
  }
}
