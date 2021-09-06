import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // get token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      const clonedReq = request.clone({
        setHeaders: { Authorization: `${token}` },
      });
      return next.handle(clonedReq);
    }
    return next.handle(request);
  }
}
