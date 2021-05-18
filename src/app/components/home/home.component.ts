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

}
