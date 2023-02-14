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

    if (isNaN(value) || !value) return;

    if (!this.haveEnoughMoney(value)) return;

    this.bankService.makeWithdraw(value);
  }

  private haveEnoughMoney(number: number): boolean {
    return number <= this.bankService.getSavings;
  }
}
