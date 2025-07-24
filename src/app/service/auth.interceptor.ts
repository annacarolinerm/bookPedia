import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken && req.url.includes('/usuario') && !this.isCriandoUsuario(req)) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }

  private isCriandoUsuario(req: HttpRequest<any>): boolean {
    return req.url.endsWith('/usuario') && req.method === 'POST';
  }

}
