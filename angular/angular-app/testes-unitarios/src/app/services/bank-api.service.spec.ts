import { TestBed } from '@angular/core/testing';

import { BankApiService } from './bank-api.service';

describe('BankApiService', () => {
  let service: BankApiService;
  let value: number = 100;
  let savingInitialValue: number;
  let walletInitialValue: number;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankApiService);
    savingInitialValue = service.getSavings || 0;
    walletInitialValue = service.getWallet || 0;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should withdraw works', () => {
    expect(service.makeWithdraw(value)).toBeUndefined();
    expect(service.getWallet).toEqual(walletInitialValue + value);
    expect(service.getSavings).toEqual(savingInitialValue - value);
  });

  it('should deposit works', () => {
    expect(service.makeDeposit(value)).toBeUndefined();
    expect(service.getSavings).toEqual(savingInitialValue + value);
    expect(service.getWallet).toEqual(walletInitialValue - value);
  });
});
