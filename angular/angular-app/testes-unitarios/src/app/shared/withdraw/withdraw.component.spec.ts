import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawComponent } from './withdraw.component';

describe('WithdrawComponent', () => {
  let component: WithdrawComponent;
  let fixture: ComponentFixture<WithdrawComponent>;
  let valueInSaving: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WithdrawComponent);
    component = fixture.componentInstance;
    valueInSaving = component.bankService.getSavings;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('handleClick recive empty string', () => {
    expect(component.handleClick('')).toBeUndefined();
  });

  it('attempt to withdraw more than the account has', () => {
    const value: string = `${valueInSaving - 1}`;
    expect(component.handleClick(value)).toBeUndefined();
  });

  it('attempt to withdraw less than the account has', () => {
    const value: string = `${valueInSaving + 1}`;
    expect(component.handleClick(value)).toBeUndefined();
  });

  it('interface - should witdraw button works', () => {
    const element = fixture.debugElement.nativeElement;

    element.querySelector('#witdrawInput').value = '10';
    element.querySelector('#witdrawButton').click();
    fixture.detectChanges();

    const changedValue = dirtyStringToNumber(
      element.querySelector('#witdrawValue').innerText
    );

    expect(changedValue).toEqual(valueInSaving - 10);
  });
});

export function dirtyStringToNumber(string: string): number {
  return +string.replace(/([^a-z0-9 ._-]+)/gi, '');
}
