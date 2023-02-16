import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanActiveGuard implements CanActivate {
  canActivate(
    { queryParams }: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { account, password } = queryParams;

    console.log(queryParams);
    console.log(state);

    if (account === '1' && password === 'teste') return true;
    return false;
  }
}
