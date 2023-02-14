import { Component } from '@angular/core';
import { BankApiService } from 'src/app/services/bank-api.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent {
  constructor(public bankService: BankApiService) {}

  handleClick(input: string): void {
    const value = +input;

    this.bankService.makeDeposit(value);
  }
}
