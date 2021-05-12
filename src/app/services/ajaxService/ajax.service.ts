import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private ajax: HttpClient;

  constructor(ajax: HttpClient) {
    this.ajax = ajax;
  }

  //封装get请求
  public ajaxGet = (url: string, callback: Function): void => {
    this.ajax.get<any>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  //请求数据格式
      }),
      withCredentials: false      //是否携带认证信息
    }).pipe(
      retry(3),         //如果请求失败，重新请求次数
      catchError(AjaxService.handleError),    //捕获错误信息
    ).subscribe((response) => {
      callback(response);     //将服务器响应数据封装到回调函数中
    }, (e) => {     //错误处理
      console.log(e);
    }, () => {      //响应完成之后执行的函数
      console.log('complete');
    });
  };

  //封装post请求
  public ajaxPost = (url: string, request: object, callback: Function): void => {
    this.ajax.post<any>(url, request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: false
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      callback(response);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  };

  //封装put请求
  public ajaxPut = (url: string, request: object, callback: Function): void => {
    this.ajax.put<any>(url, request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: false
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      callback(response);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  };

  //封装delete请求
  public ajaxDelete = (url: string, callback: Function): void => {
    this.ajax.delete<any>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: false
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      callback(response);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  };

  // 错误消息
  private static handleError = (error: HttpErrorResponse): Observable<any> => {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

}
