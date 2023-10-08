import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./screens/subscription/subscription.module').then(m => m.SubscriptionPageModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
