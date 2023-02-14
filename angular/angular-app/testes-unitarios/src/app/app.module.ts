import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingComponent } from './shared/banking/banking.component';
import { WithdrawComponent } from './shared/withdraw/withdraw.component';
import { DepositComponent } from './shared/deposit/deposit.component';

@NgModule({
  declarations: [
    AppComponent,
    BankingComponent,
    WithdrawComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
