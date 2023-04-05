import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../servicios/token.service';
import { UsuarioService } from '../servicios/usuario.service';
declare let window: any;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private userStatus: UsuarioService
  ) {}

  handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      this.tokenService.signOut();
      this.userStatus.setUserStatus(false);
    }
    return throwError(err);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    // Interceptamos los llamados que NO sean a FormSubmit, ya que sino generamos errores de CORS.
    if(!req.url.includes("formsubmit")) {
      let authReq = !token
        ? req
        : req.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
          });
      return next.handle(authReq).pipe(catchError((err) => this.handleAuthError(err)));
    }
    return next.handle(req).pipe(catchError((err) => this.handleAuthError(err)));
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
