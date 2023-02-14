import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingComponent } from './shared/banking/banking.component';
import { WithdrawComponent } from './shared/withdraw/withdraw.component';
import { DepositComponent } from './shared/deposit/deposit.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    BankingComponent,
    WithdrawComponent,
    DepositComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [BankingComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
