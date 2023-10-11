import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/add-ad/add-ad.module').then(m => m.AddAdPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'ads/:id',
    loadChildren: () => import('./pages/ad-details/ad-details.module').then(m => m.AdDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
