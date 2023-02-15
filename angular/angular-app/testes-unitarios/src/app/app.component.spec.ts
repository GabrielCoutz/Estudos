import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BankingComponent } from './shared/banking/banking.component';
import { DepositComponent } from './shared/deposit/deposit.component';
import { ListComponent } from './shared/investiments/components/list/list.component';
import { WithdrawComponent } from './shared/withdraw/withdraw.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        BankingComponent,
        ListComponent,
        WithdrawComponent,
        DepositComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
