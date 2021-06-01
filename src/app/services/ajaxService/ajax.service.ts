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

  /**
   * 封装了get请求
   * @param url    请求的地址
   * @param data   请求数据
   * @param responseCallback   返回值回调函数
   * @param isWithCredentials   是否携带认证信息
   */
  public ajaxGet = (url: string,
                    data: any,
                    responseCallback: Function,
                    isWithCredentials?: boolean): void => {
    url = this.urlHandler(url, data);
    this.ajax.get<any>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  //请求数据格式
      }),
      withCredentials: !(isWithCredentials == undefined || !isWithCredentials)      //是否携带认证信息
    }).pipe(
      retry(3),         //如果请求失败，重新请求次数
      catchError(AjaxService.handleError),    //捕获错误信息
    ).subscribe((response) => {
      responseCallback(response);     //将服务器响应数据封装到回调函数中
    });
  };

  /**
   * 封装了get请求并处理错误和请求完成后的功能
   * @param url   请求地址
   * @param data   请求数据
   * @param responseCallback   返回值回调函数
   * @param errorCallback   错误信息回调函数
   * @param completeCallback   请求完成回调函数
   * @param isWithCredentials   是否携带认证信息
   */
  public ajaxGetAll = (url: string,
                       data: any,
                       responseCallback: Function,
                       errorCallback: Function,
                       completeCallback: Function,
                       isWithCredentials?: boolean): void => {
    url = this.urlHandler(url, data);
    this.ajax.get<any>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  //请求数据格式
      }),
      withCredentials: !(isWithCredentials == undefined || !isWithCredentials)      //是否携带认证信息
    }).pipe(
      retry(3),         //如果请求失败，重新请求次数
      catchError(AjaxService.handleError),    //捕获错误信息
    ).subscribe((response) => {
      responseCallback(response);     //将服务器响应数据封装到回调函数中
    }, (e) => {     //错误处理
      errorCallback(e);
    }, () => {      //响应完成之后执行的函数
      completeCallback();
    });
  };

  /**
   * 封装了post请求
   * @param url   请求地址
   * @param requestBody   请求参数，json格式
   * @param responseCallback   返回值回调函数
   * @param isWithCredentials   是否携带认证信息
   */
  public ajaxPost = (url: string,
                     requestBody: object,
                     responseCallback: Function,
                     isWithCredentials?: boolean): void => {
    this.ajax.post<any>(url, {
      request: requestBody
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: !(isWithCredentials == undefined || !isWithCredentials)
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      responseCallback(response);
    });
  };

  /**
   * 封装了post请求并处理错误和请求完成后的功能
   * @param url   请求地址
   * @param requestBody   请求参数，json格式
   * @param responseCallback   返回值回调函数
   * @param errorCallback   错误信息回调函数
   * @param completeCallback   请求完成回调函数
   * @param isWithCredentials   是否携带认证信息
   */
  public ajaxPostAll = (url: string,
                        requestBody: object,
                        responseCallback: Function,
                        errorCallback: Function,
                        completeCallback: Function,
                        isWithCredentials?: boolean): void => {
    this.ajax.post<any>(url, {
      request: requestBody
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: !(isWithCredentials == undefined || !isWithCredentials)
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      responseCallback(response);
    }, (e) => {
      errorCallback(e);
    }, () => {
      completeCallback();
    });
  };

  /**
   * 封装了put请求
   * @param url   请求地址
   * @param requestBody   请求参数，json格式
   * @param responseCallback   返回值回调函数
   * @param isWithCredentials   是否携带认证信息
   */
  public ajaxPut = (url: string,
                    requestBody: object,
                    responseCallback: Function,
                    isWithCredentials?: boolean): void => {
    this.ajax.put<any>(url, {
      request: requestBody
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: !(isWithCredentials == undefined || !isWithCredentials)
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      responseCallback(response);
    });
  };

  /**
   * 封装了put请求
   * @param url   请求地址
   * @param requestBody   请求参数，json格式
   * @param responseCallback   返回值回调函数
   * @param errorCallback   错误信息回调函数
   * @param completeCallback   完成请求后的回调函数
   * @param isWithCredentials   是否携带认证信息
   */
  public ajaxPutAll = (url: string,
                       requestBody: object,
                       responseCallback: Function,
                       errorCallback: Function,
                       completeCallback: Function,
                       isWithCredentials?: boolean): void => {
    this.ajax.put<any>(url, {
      request: requestBody
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: !(isWithCredentials == undefined || !isWithCredentials)
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      responseCallback(response);
    }, (e) => {
      errorCallback(e);
    }, () => {
      completeCallback();
    });
  };

  /**
   * 封装了delete请求
   * @param url   请求地址
   * @param responseCallback   返回值回调函数
   * @param isWithCredentials   是否携带认证信息
   */
  public ajaxDelete = (url: string,
                       responseCallback: Function,
                       isWithCredentials?: boolean): void => {
    this.ajax.delete<any>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: !(isWithCredentials == undefined || !isWithCredentials)
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      responseCallback(response);
    });
  };

  /**
   * 封装了delete请求
   * @param url   请求地址
   * @param responseCallback   返回值回调函数
   * @param errorCallback   错误信息回调函数
   * @param completeCallback   完成请求后执行的回调函数
   * @param isWithCredentials   是否携带认证信息
   */
  public ajaxDeleteAll = (url: string,
                          responseCallback: Function,
                          errorCallback: Function,
                          completeCallback: Function,
                          isWithCredentials?: boolean): void => {
    this.ajax.delete<any>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: !(isWithCredentials == undefined || !isWithCredentials)
    }).pipe(
      retry(3),
      catchError(AjaxService.handleError)
    ).subscribe((response) => {
      responseCallback(response);
    }, (e) => {
      errorCallback(e);
    }, () => {
      completeCallback();
    });
  };

  /**
   * 处理get请求地址的拼接
   * @param url   请求地址
   * @param data   请求数据
   */
  private urlHandler = (url: string, data: any): string => {
    url += '?';
    for (let dataKey in data) {
      if (data.hasOwnProperty(dataKey)) {
        if (data[dataKey] != undefined && data[dataKey] != null && data[dataKey] != '') {
          url += dataKey + '=' + data[dataKey] + '&';
        }
      }
    }
    if (url.lastIndexOf('&') != -1) {
      url = url.substr(0, url.lastIndexOf('&'));
    } else {
      url = url.substr(0, url.lastIndexOf('?'));
    }
    console.log(url);
    return url;
  };

  /**
   * 统一错误处理
   * @param error  错误信息
   */
  private static handleError = (error: HttpErrorResponse): Observable<any> => {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

}
