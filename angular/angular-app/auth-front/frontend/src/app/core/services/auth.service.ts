import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthModel } from './Auth/interfaces/auth-model';
import { ErroModel } from './Auth/interfaces/erro-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(private request: HttpClient) {}

  signIn(payload: AuthModel): Observable<AuthModel> {
    return this.request.post<AuthModel>(`${this.url}/signin`, payload).pipe(
      map((res) => res),
      catchError(({ error }: ErroModel) =>
        error.message
          ? throwError(() => error.message)
          : throwError(() => 'Serviço indisponível no momento.')
      )
    );
  }
}
