import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private _loading: LoadingService
  ) { }

  @Input() title = "Home"
  @Input() backButton = false;

  loading$ = this._loading.loading$;

  ngOnInit() { }

}
