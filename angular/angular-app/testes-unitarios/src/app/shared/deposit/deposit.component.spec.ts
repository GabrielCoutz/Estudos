import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dirtyStringToNumber } from '../withdraw/withdraw.component.spec';

import { DepositComponent } from './deposit.component';

describe('DepositComponent', () => {
  let component: DepositComponent;
  let fixture: ComponentFixture<DepositComponent>;
  let valueinWallet: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepositComponent);
    component = fixture.componentInstance;
    valueinWallet = component.bankService.getWallet || 10;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('handleClick recive empty string', () => {
    expect(component.handleClick('')).toBeUndefined();
  });

  it('handleClick recive valid value', () => {
    expect(component.handleClick('10')).toBeUndefined();
  });

  it('interface - should deposit button works', () => {
    const element = fixture.debugElement.nativeElement;

    element.querySelector('#depositInput').value = '10';
    element.querySelector('#depositButton').click();
    fixture.detectChanges();

    const changedValue = dirtyStringToNumber(
      element.querySelector('#depositValue').innerText
    );

    expect(changedValue).toEqual(valueinWallet - 10);
  });
});
