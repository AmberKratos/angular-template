import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

/**
 * 组件之间相互传值
 */
export class DataService {

  private subject: Subject<any>;

  constructor(subject: Subject<any>) {
    this.subject = subject;
  }

  /**
   * 向其他组件发送数据
   * @param targetComponent 目标组件
   * @param sourceData 要发送的数据
   */
  public sendData = (targetComponent: string, sourceData: object): void => {
    const pack = {
      target: targetComponent,
      data: sourceData
    };
    this.subject.next(pack);
  };

  /**
   * 接收其他组件发送的数据
   * @param targetComponent 目标组件，默认使用：this.constructor.name
   * @param callback 回调函数
   */
  public receiveData = (targetComponent: string, callback: Function): void => {
    this.subject.subscribe((response) => {
      if (response.target === targetComponent) {
        callback(response);
      }
    });
  };

}
