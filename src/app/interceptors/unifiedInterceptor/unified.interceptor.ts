import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UnifiedInterceptor implements HttpInterceptor {

  constructor() {
  }

  /**
   * 统一ajax请求拦截器，用于修改请求参数和响应返回值
   * @param request 请求参数
   * @param next 请求流
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.method == 'GET') {   //统一get请求处理
      console.log(request);
      return next.handle(request.clone({
        //todo:统一修改请求参数
        url: request.url
      })).pipe(map((response: any) => {   //统一修改响应返回值
        if (response.type == 0) {
          //todo:向服务器发送请求的时候，type=0，可以在这里完成需要在请求时完成的事情
          //console.log()
        } else if (response.type == 4) {
          //todo:接收服务器返回的结果时，type=4，可以在这里修改返回值结果
          //console.log()
        }
        return response;
      }));
    } else if (request.method == 'POST') {   //统一post请求处理
      console.log(request);
      return next.handle(request.clone({
        //todo:统一修改请求参数
        url: request.url + '/api/'
      })).pipe(map((response: any) => {   //统一修改响应返回值
        if (response.type == 0) {
          //todo:向服务器发送请求的时候，type=0，可以在这里完成需要在请求时完成的事情
          //console.log()
        } else if (response.type == 4) {
          //todo:接收服务器返回的结果时，type=4，可以在这里修改返回值结果
          //console.log(response);
        }
        return response;
      }));
    } else if (request.method == 'PUT') {    //统一put请求处理
      console.log(request);
      return next.handle(request.clone({
        url: request.url
      })).pipe(map((response: any) => {   //统一修改响应返回值
        if (response.type == 0) {
          //todo:向服务器发送请求的时候，type=0，可以在这里完成需要在请求时完成的事情
          //console.log()
        } else if (response.type == 4) {
          //todo:接收服务器返回的结果时，type=4，可以在这里修改返回值结果
          //console.log(response);
        }
        return response;
      }));
    } else {    //统一delete请求处理
      console.log(request);
      return next.handle(request.clone({
        //统一修改请求参数
        url: request.url
      })).pipe(map((response: any) => {   //统一修改响应返回值
        if (response.type == 0) {
          //todo:向服务器发送请求的时候，type=0，可以在这里完成需要在请求时完成的事情
          //console.log()
        } else if (response.type == 4) {
          //todo:接收服务器返回的结果时，type=4，可以在这里修改返回值结果
          //console.log(response);
        }
        return response;
      }));
    }
  }

}
