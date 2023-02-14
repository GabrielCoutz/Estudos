import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  private savings: number = 100;
  private wallet: number = 0;

  get getSavings(): number {
    return this.savings;
  }

  get getWallet(): number {
    return this.wallet;
  }

  withdraw(input: string): void {
    if (!this.savings) return;
    const value = +input;

    if (value > this.savings) {
      this.wallet = this.savings;
      this.savings = 0;
      return;
    }

    this.savings -= value;
    this.wallet += value;
  }
}
