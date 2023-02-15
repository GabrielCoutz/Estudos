import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './investiments/list/list.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BankingComponent } from './banking/banking.component';

@NgModule({
  declarations: [
    BankingComponent,
    WithdrawComponent,
    DepositComponent,
    ListComponent,
  ],
  imports: [CommonModule],
  exports: [
    BankingComponent,
    WithdrawComponent,
    DepositComponent,
    ListComponent,
  ],
})
export class SharedModule {}
