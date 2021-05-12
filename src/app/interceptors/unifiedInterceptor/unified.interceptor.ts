import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UnifiedInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //统一post请求处理
    if (request.method == 'POST') {
      let body: any = request.body;
      console.log(request);
      console.log(body);
      const cloneRequest = request.clone({    //请求数据统一处理
        url: request.url + '/api/'
      });
      return next.handle(cloneRequest);
    }
    return next.handle(request);
  }
}
