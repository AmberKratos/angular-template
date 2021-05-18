import {Injectable} from '@angular/core';
import {DataStorage} from '../../classes/dataStorage/data-storage';


@Injectable({
  providedIn: 'root'
})

/**
 * 组件之间相互传值
 */
export class DataService {

  //组件之间数据传递的存储容器
  private data: DataStorage[] = [];

  constructor() {

  }

  /**
   * 向数据容器存入数据
   * @param fromComponent   发送数据的组件
   * @param toComponent   接收数据的组件
   * @param data   发送的数据
   */
  setData = (fromComponent: string, toComponent: string, data: object) => {
    if (this.data.length > 0) {
      this.data.forEach((result: DataStorage) => {
        if (result.from == fromComponent && result.to == toComponent) {
          result.data = Object.assign(result.data, data);
        } else {
          this.data.push(new DataStorage(fromComponent, toComponent, data));
        }
      });
    } else {
      this.data.push(new DataStorage(fromComponent, toComponent, data));
    }
  };

  /**
   * 从数据容器中取出目标组件的数据
   * @param toComponent   接收数据的组件
   */
  getData = (toComponent: string): DataStorage[] => {
    return this.data.filter((s: DataStorage) => {
      return s.to == toComponent;
    });
  };

}
