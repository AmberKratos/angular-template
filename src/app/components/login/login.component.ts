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

  private num: number = 0;

  constructor(ajax: AjaxService, dataTrans: DataService) {
    this.ajax = ajax;
    this.dataTrans = dataTrans;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  testAjaxPost = (): void => {
    this.ajax.ajaxPostAll('http://127.0.0.1:8080',
      {
        username: '1001',
        password: 'root'
      },
      (response: object) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);
      }, () => {
        console.log('complete');
      }, true);
  };

  testAjaxGet = (): void => {
    this.ajax.ajaxGetAll('http://127.0.0.1:8080?username=root&password=root',
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      },
      () => {
        console.log('complete');
      }, true);
  };

  testSend = (): void => {
    this.dataTrans.sendData('HomeComponent', {count: this.num++});
  };

}
