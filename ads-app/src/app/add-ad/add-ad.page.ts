import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { AdsService } from '../shared/services/ads.service';
import { User } from '../models/user.model';
import { AuthService } from '../shared/services/auth.service';
import { CategoryService } from '../shared/services/category.service';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.page.html',
  styleUrls: ['./add-ad.page.scss'],
})
export class AddAdPage implements OnInit {

  constructor(private _ad: AdsService,
    private _auth: AuthService,
    private _loading: LoadingService,
    private _cats: CategoryService) {
    this._auth.getUserFromLS()
  }

  title: string = ""
  description: string = ""
  image: string = ""
  price: number = 0
  category: Category | null = null;
  user: User | null = null;


  categories$ = this._cats.findAll();

  ngOnInit() {
    this._auth.authenticatedUser$.subscribe(
      auth => this.user = auth
    )

    console.log(this.user)
  }


  addAd() {
    const ad = {
      title: this.title,
      description: this.description,
      categoryId: this.category?._id,
      image: this.image,
      price: this.price,
      userId: this.user?._id
    };
    this._ad.addAd(ad).subscribe();
  }

  handleCategoryChange(e: Category) {
    this.category = e
  }
}
