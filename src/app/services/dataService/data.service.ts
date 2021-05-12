import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

/**
 * 组件之间相互传值
 */
export class DataService {

  private subject: Subject<any>;
  private sub: Subscription | undefined;

  constructor(subject: Subject<any>) {
    this.subject = subject;
  }


  /**
   * 向其他组件发送数据
   * @param targetComponent 目标组件
   * @param sourceData 要发送的数据
   */
  sendData = (targetComponent: string, sourceData: any): void => {
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
  receiveData = (targetComponent: string, callback: Function) => {
    this.sub = this.subject.subscribe((response) => {
      if (response.target == targetComponent) {
        callback(response.data);
      }
    });
  };

  /**
   * 使用完后销毁Subscription，避免占用资源
   */
  destroySub = (): void => {
    if (this.sub != undefined) {
      this.sub.unsubscribe();
    }
  };

}
