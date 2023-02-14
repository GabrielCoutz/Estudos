import { Component } from '@angular/core';
import { BankApiService } from 'src/app/services/bank-api.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent {
  constructor(public bankService: BankApiService) {}

  handleClick(input: string): void {
    const value = +input;

    if (this.haveEnoughMoney(value)) this.bankService.makeWithdraw(value);
  }

  haveEnoughMoney(number: number): boolean {
    return number <= this.bankService.getSavings;
  }
}
