import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./core/components/auth/auth.module')).AuthModule,
  },
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('./components/admin/admin.module')).AdminModule,
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
