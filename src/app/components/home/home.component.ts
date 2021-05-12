import {Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {DataService} from '../../services/dataService/data.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('chartBox', {static: false})
  private readonly div: ElementRef<HTMLElement>;

  private readonly dataTrans: DataService;

  constructor(dataTrans: DataService,
              div: ElementRef<HTMLElement>) {
    this.dataTrans = dataTrans;
    this.div = div;
  }

  ngOnInit(): void {
    this.testReceive();
  }

  ngAfterViewInit(): void {
    this.StatisticalChart();
  }

  ngOnDestroy(): void {
    this.dataTrans.destroySub();
  }

  testReceive = (): void => {
    if (this.dataTrans != undefined) {
      this.dataTrans.receiveData(this.constructor.name, (data: any) => {
        console.log(data);
      });
    }
  };

  private StatisticalChart = (): void => {
    if (this.div != undefined) {
      const div: any = this.div.nativeElement;
      let myChart: any = echarts.init(div);
      let option: any = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      option && myChart.setOption(option);
    }
  };


}
