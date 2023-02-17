import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel } from './Auth/interfaces/auth-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(private request: HttpClient) {}

  signIn(payload: AuthModel): Observable<AuthModel> {
    return this.request.post<AuthModel>(`${this.url}/signin`, payload);
  }
}
