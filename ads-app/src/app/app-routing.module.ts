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
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'ads/:id',
    loadChildren: () => import('./ad-details/ad-details.module').then(m => m.AdDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'account/my-ads',
    loadChildren: () => import('./my-ads/my-ads.module').then(m => m.MyAdsPageModule)
  },
  {
    path: 'account/liked',
    loadChildren: () => import('./liked/liked.module').then(m => m.LikedPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
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
