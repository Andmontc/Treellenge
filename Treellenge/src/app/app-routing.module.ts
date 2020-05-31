import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  },
  {
    path: 'challenges',
    loadChildren: () => import('./challenges/challenges.module').then( m => m.ChallengesPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'donations',
    loadChildren: () => import('./donations/donations.module').then( m => m.DonationsPageModule)
  },
  {
    path: 'check-my-tree',
    loadChildren: () => import('./check-my-tree/check-my-tree.module').then( m => m.CheckMyTreePageModule)
  },
  {
    path: 'daily-challenge',
    loadChildren: () => import('./daily-challenge/daily-challenge.module').then( m => m.DailyChallengePageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
