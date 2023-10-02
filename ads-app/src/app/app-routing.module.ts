import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './guards/auth.guard';

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
    path: 'ads/:id',
    loadChildren: () => import('./pages/ad-details/ad-details.module').then(m => m.AdDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account/my-ads',
    loadChildren: () => import('./pages/my-ads/my-ads.module').then(m => m.MyAdsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account/liked',
    loadChildren: () => import('./pages/liked/liked.module').then(m => m.LikedPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'add-ad',
    loadChildren: () => import('./pages/add-ad/add-ad.module').then(m => m.AddAdPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
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
