import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthModel } from './interfaces/auth-model';
import { ErroModel } from './interfaces/erro-model';
import { ResponseModel } from './interfaces/response-model';
import {
  removeTokenFromLocalStorage,
  saveTokenInLocalStorage,
} from './utils/handleResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(private request: HttpClient, private router: Router) {}

  private redirect(name: string[]) {
    this.router.navigate(name);
  }

  signIn(payload: AuthModel): Observable<ResponseModel> {
    return this.request.post<ResponseModel>(`${this.url}/signin`, payload).pipe(
      map((res: ResponseModel) => {
        saveTokenInLocalStorage(res.token);
        this.redirect(['admin']);
        return res;
      }),
      catchError(({ error }: ErroModel) =>
        error.message
          ? throwError(() => error.message)
          : throwError(() => 'Serviço indisponível no momento.')
      )
    );
  }

  logOut(): void {
    removeTokenFromLocalStorage();
    this.redirect(['']);
  }
}
