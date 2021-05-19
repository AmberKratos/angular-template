import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {DataService} from '../../services/dataService/data.service';
import {DataStorage} from '../../classes/dataStorage/data-storage';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  private dataService:DataService;
  private activatedRoute:ActivatedRoute;

  constructor(dataService:DataService,
              activatedRoute:ActivatedRoute) {
    this.dataService=dataService;
    this.activatedRoute=activatedRoute;
  }

  ngOnInit(): void {
    const data=this.dataService.getData(this.constructor.name);
    data.forEach((result:DataStorage)=>{
      if (result!=undefined){
        console.log(result);
      }
    })
  }

  ngAfterViewInit(): void {
    //获取resolver传送过来的数据
    this.activatedRoute.data.subscribe((data)=>{
      console.log(data)
    })
  }

  ngOnDestroy(): void {

  }

}
