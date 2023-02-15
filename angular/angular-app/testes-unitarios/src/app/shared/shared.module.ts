import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './investiments/components/list/list.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BankingComponent } from './banking/banking.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BankingComponent,
    WithdrawComponent,
    DepositComponent,
    ListComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    BankingComponent,
    WithdrawComponent,
    DepositComponent,
    ListComponent,
  ],
})
export class SharedModule {}
