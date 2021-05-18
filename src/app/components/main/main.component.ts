import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {DataService} from '../../services/dataService/data.service';
import {DataStorage} from '../../classes/dataStorage/data-storage';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  private dataService:DataService;

  constructor(dataService:DataService) {
    this.dataService=dataService;
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

  }

  ngOnDestroy(): void {

  }

}
