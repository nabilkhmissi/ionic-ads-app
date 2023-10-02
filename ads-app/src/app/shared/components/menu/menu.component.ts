import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  user: User | null = null;
  menu = [
    { page: "Home", path: "", ion: "home-outline" },
    { page: "My Ads", path: "/account/my-ads", ion: "menu-outline" },
    { page: "Liked", path: "/account/liked", ion: "heart-outline" }
  ]

  ngOnInit() {
    this._auth.authenticatedUser$.subscribe(
      user => this.user = user
    )
  }

  navigate(path: string) {
    this._router.navigate([path])
  }

  goToLogin() {
    this._router.navigate(["login"])
  }

  goToProfile() {
    this._router.navigate(["/account"])
  }

  logout() {
    this._auth.logout()
  }

}
