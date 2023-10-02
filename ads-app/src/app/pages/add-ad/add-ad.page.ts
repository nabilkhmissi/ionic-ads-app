import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { User } from 'src/app/models/user.model';
import { AdsService } from 'src/app/shared/services/ads.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.page.html',
  styleUrls: ['./add-ad.page.scss'],
})
export class AddAdPage implements OnInit {

  constructor(private _ad: AdsService,
    private _auth: AuthService,
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
