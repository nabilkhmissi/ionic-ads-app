import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cats = [
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

}
