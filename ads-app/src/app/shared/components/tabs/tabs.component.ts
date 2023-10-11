import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  authUser$ = this._auth.authenticatedUser$;

  ngOnInit() { }

}
