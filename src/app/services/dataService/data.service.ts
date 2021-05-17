import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {DataStorage} from '../../classes/dataStorage/data-storage';


@Injectable({
  providedIn: 'root'
})

/**
 * 组件之间相互传值
 */
export class DataService {

  //一般组件之间相互传值
  private subject: Subject<any>;
  private sub: Subscription | undefined;
  public data:DataStorage[]=[];

  constructor(subject: Subject<any>) {
    this.subject = subject;
  }

  /**
   * 向其他组件发送数据
   * @param fromComponent  发送数据的组件
   * @param toComponent   接收数据的组件
   * @param sourceData 要发送的数据
   */
  sendData = (fromComponent:string,toComponent: string, sourceData: any): void => {
    const pack =new DataStorage(fromComponent,toComponent,sourceData);
    this.subject.next(pack);
  };

  /**
   * HomeComponent组件接收其他组件发送的数据，作为数据中转的中心
   * @param toComponent 目标组件，默认使用：this.constructor.name
   * @param callback 回调函数
   */
  receiveData = (toComponent: string, callback: Function) => {
    this.sub = this.subject.subscribe((response) => {
      if (toComponent=='HomeComponent') {
        callback(response);
      }
    });
  }

  getData=(toComponent:string):DataStorage[]=>{
    return this.data.filter((s:DataStorage)=>{
      return s.to==toComponent;
    })
  }

  /**
   * 使用完后销毁Subscription，避免占用资源
   */
  destroySub = (): void => {
    if (this.sub != undefined) {
      this.sub.unsubscribe();
    }
  };
}
