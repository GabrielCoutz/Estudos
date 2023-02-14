import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositComponent } from './deposit.component';

describe('DepositComponent', () => {
  let component: DepositComponent;
  let fixture: ComponentFixture<DepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepositComponent);
    component = fixture.componentInstance;
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
});
