
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpXsrfTokenExtractor,
  HttpHeaders
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestHeader;
    requestHeader = request.clone({
      headers: new HttpHeaders({
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // 'Content-Type': 'application/json; charset=utf-8',
        // 'Accept': 'application/json',
        'X-Auth-Token': 'e48e621b4e6e46ccbfd4e81c779dd9e5'
      })
    });
    return next.handle(requestHeader);
  }


}