import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SiginComponent } from './pages/sigin/sigin.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SiginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,

  ],
})
export class AuthModule {}
