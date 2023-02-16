import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investments } from '../shared/investiments/model/investments';

@Injectable({
  providedIn: 'root',
})
export class ListInvestmentsService {
  private url: string =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private request: HttpClient) {}

  getInvestments(): Observable<Investments[]> {
    return this.request.get<Investments[]>(this.url);
  }
}
