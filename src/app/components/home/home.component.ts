import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DataService} from '../../services/dataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  /**
   * 从其他组件获取传输过来的数据，并保存在公共数据服务的data参数中，作为中间存储，
   * 以便另一个组件获取传输过来的数据
   */
  storeData = () => {
    console.log(666666)
    this.dataService.receiveData(this.constructor.name, (response: any) => {
      this.dataService.data.push(response);
    });
  };
}
