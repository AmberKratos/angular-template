import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AjaxService} from '../../services/ajaxService/ajax.service';
import {DataService} from '../../services/dataService/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {

  private ajax: AjaxService;
  private dataTrans: DataService;

  private num:number=0;

  constructor(ajax: AjaxService, dataTrans: DataService) {
    this.ajax = ajax;
    this.dataTrans = dataTrans;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  testAjax = (): void => {
    this.ajax.ajaxPost('http://127.0.0.1:8080', {}, (response: object) => {
      console.log(response);
    });
  };

  testSend = (): void => {
    this.dataTrans.sendData('HomeComponent', {count: this.num++});
  };

}
