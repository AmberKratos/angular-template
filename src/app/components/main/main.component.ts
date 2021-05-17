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
    let data:DataStorage[]=this.dataService.getData(this.constructor.name);
    data.filter((s:DataStorage)=>{
      return s.from=="LoginComponent";
    }).forEach((value:DataStorage)=>{
      console.log(value);
    })
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }

}
