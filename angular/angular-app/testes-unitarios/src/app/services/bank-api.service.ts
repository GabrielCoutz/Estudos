import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BankApiService {
  private savings: number = 100;
  private wallet: number = 0;

  get getSavings(): number {
    return this.savings;
  }

  get getWallet(): number {
    return this.wallet;
  }

  makeWithdraw(value: number): void {
    this.savings -= value;
    this.wallet += value;
  }

  makeDeposit(value: number): void {
    if (value === 123) throw new Error('teste');
    this.savings += value;
    this.wallet -= value;
  }
}
