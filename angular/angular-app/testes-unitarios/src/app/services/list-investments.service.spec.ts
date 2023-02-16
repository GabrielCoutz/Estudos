import { TestBed } from '@angular/core/testing';

import { ListInvestmentsService } from './list-investments.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import mockList from './list-investments.mock';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTesting: HttpTestingController;
  let request: HttpClient;
  const URL =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    service = TestBed.inject(ListInvestmentsService);
    httpTesting = TestBed.inject(HttpTestingController);
    request = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should investments list exists', (done) => {
    service.getInvestments().subscribe({
      next: (investments) => {
        expect(investments[0].name).toEqual('Banco 1');
        expect(investments[0].value).toEqual(100);
        done();
      },
    });

    const req = httpTesting.expectOne(URL);
    req.flush(mockList);

    expect(req.request.method).toEqual('GET');
  });
});
