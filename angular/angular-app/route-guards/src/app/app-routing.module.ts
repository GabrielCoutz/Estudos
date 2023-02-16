import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './shared/pages/account/account.component';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { HomeComponent } from './shared/pages/home/home.component';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { CanActivateChildGuard } from './shared/guards/can-activate-child.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'core',
    loadChildren: async () => (await import('./core/core.module')).CoreModule,
    canLoad: [CanLoadGuard],
    canActivateChild: [CanActivateChildGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
