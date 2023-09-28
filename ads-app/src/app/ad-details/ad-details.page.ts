import { Component, OnInit } from '@angular/core';
import { AdDetailsService } from './services/add-details.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoadingService } from '../shared/services/loading.service';
import { Ad } from '../models/ad.model';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.page.html',
  styleUrls: ['./ad-details.page.scss'],
})
export class AdDetailsPage implements OnInit {

  constructor(
    private _details: AdDetailsService,
    private _activatedRoute: ActivatedRoute,
    private _loading: LoadingService,
  ) { }


  ad!: Ad;
  ngOnInit() {
    this._loading.showLoading();
    const id = this._activatedRoute.snapshot.paramMap.get("id")
    if (id) {
      this._details.getAdById(id).subscribe(data => {
        this._loading.hideLoading();
        console.log(data)
        this.ad = data
      })
    }
  }

}
