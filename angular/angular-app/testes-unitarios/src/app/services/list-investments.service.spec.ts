import { TestBed } from '@angular/core/testing';

import { ListInvestmentsService } from './list-investments.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Investments } from '../shared/investiments/model/investments';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTesting: HttpTestingController;
  let request: HttpClient;
  const URL =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  const mockList: Investments[] = [
    {
      name: 'Banco 1',
      value: 100,
    },
    {
      name: 'Banco 2',
      value: 200,
    },
    {
      name: 'Banco 3',
      value: 300,
    },
    {
      name: 'Banco 4',
      value: 400,
    },
  ];

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
});
