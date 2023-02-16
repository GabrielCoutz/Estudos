import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListComponent } from './list.component';
import { ListInvestmentsService } from 'src/app/services/list-investments.service';
import mockList from 'src/app/services/list-investments.mock';
import { of } from 'rxjs';
import { Investments } from '../../model/investments';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestmentsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ListInvestmentsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list investments', (done) => {
    spyOn(service, 'getInvestments').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    const investmentsMocked = component.investments;

    if (!investmentsMocked) throw new Error('Investments list does not exists');

    expect(investmentsMocked.length).toEqual(4);

    expect(investmentsMocked[0].name).toEqual('Banco 1');
    expect(investmentsMocked[0].value).toEqual(100);

    expect(investmentsMocked[3].name).toEqual('Banco 4');
    expect(investmentsMocked[3].value).toEqual(400);

    expect(service.getInvestments).toHaveBeenCalledWith();
    done();
  });
});
