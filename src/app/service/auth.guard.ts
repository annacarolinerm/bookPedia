import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {}

  canActivate(): boolean | UrlTree {
    const token = localStorage.getItem('access_token');

    if (token) {
      return true;
    }

    console.log('teste')
    return this.router.parseUrl('/login');
  }
}
