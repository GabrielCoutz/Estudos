import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from '../shared/deposit/deposit.component';
import { WithdrawComponent } from '../shared/withdraw/withdraw.component';
import { BankingComponent } from '../shared/banking/banking.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BankingComponent,
    WithdrawComponent,
    DepositComponent,
  ],
  exports: [BankingComponent],
})
export class BankingModule {}
