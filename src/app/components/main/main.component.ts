import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {DataService} from '../../services/dataService/data.service';
import {DataStorage} from '../../classes/dataStorage/data-storage';
import {ActivatedRoute} from '@angular/router';
import {AjaxService} from '../../services/ajaxService/ajax.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  private dataService: DataService;
  private activatedRoute: ActivatedRoute;
  private ajaxService:AjaxService;

  public id:any="";
  public name:any="";
  public age:any="";
  public sex:any="";
  public dataList=[];

  constructor(dataService: DataService,
              activatedRoute: ActivatedRoute,
              ajaxService:AjaxService) {
    this.dataService = dataService;
    this.activatedRoute = activatedRoute;
    this.ajaxService=ajaxService
  }

  ngOnInit(): void {
    const data = this.dataService.getData(this.constructor.name);
    data.forEach((result: DataStorage) => {
      if (result != undefined) {
        console.log(result);
      }
    });
  }

  ngAfterViewInit(): void {
    //获取resolver传送过来的数据
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {

  }

  getMessage = () => {
    this.ajaxService.ajaxGet("http://127.0.0.1:8081/demoUser/findDemoUser",{
      name:this.name,
      age:this.age,
      sex:this.sex
    },(response:any)=>{
      this.dataList=response;
    })
  }

}
