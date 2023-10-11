import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AdsService } from 'src/app/shared/services/ads.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.page.html',
  styleUrls: ['./add-ad.page.scss'],
})
export class AddAdPage implements OnInit {

  constructor(private _auth: AuthService,
    private _ad: AdsService) {
    _auth.getUserFromLS();
  }

  title: string = ""
  description: string = ""
  image: string = ""
  price: number = 0
  user: User | null = null;
  category = "";
  location = "";

  categories = [
    { path: "/", icon: "car-outline", title: "Cars" },
    { path: "/", icon: "bicycle-outline", title: "Bikes" },
    { path: "/", icon: "phone-portrait-outline", title: "Electronics" },
    { path: "/", icon: "home-outline", title: "Properties" },
    { path: "/", icon: "shirt-outline", title: "Clothes" },
    { path: "/", icon: "umbrella-outline", title: "Gadgets" },
    { path: "/", icon: "bed-outline", title: "Fourniture" },
    { path: "/", icon: "briefcase-outline", title: "Jobs" },
    { path: "/", icon: "book-outline", title: "Books" },
    { path: "/", icon: "paw-outline", title: "Animals" },
    { path: "/", icon: "cut-outline", title: "Crafts" },
    { path: "/", icon: "tv-outline", title: "Computers" },
    { path: "/", icon: "film-outline", title: "Entertain" },
    { path: "/", icon: "brush-outline", title: "Art" },
    { path: "/", icon: "shapes-outline", title: "Decoration" },
  ]

  ngOnInit() {
    this._auth.authenticatedUser$.subscribe(
      auth => {
        this.user = auth
      }
    )
  }

  addAd() {
    const ad = {
      title: this.title,
      description: this.description,
      category: this.category,
      location: this.location,
      image: this.image,
      price: this.price,
      user: this.user?._id
    };
    this._ad.addAd(ad).subscribe();
  }

  handleCategoryChange(e: any) {
    this.category = e.title
  }

}
