import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, timer } from 'rxjs';

export const livraisonGuard: CanActivateFn = (route, state) => {
  return timer(1000).pipe(
    map(i => true)
  );
};

@Injectable({
  providedIn: 'root'
})
export class LivraisonGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return timer(2000).pipe(
      map(i => true)
    );
  }

}