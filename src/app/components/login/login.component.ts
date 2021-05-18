import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {DataService} from '../../services/dataService/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  private dataService: DataService;
  private router: Router;

  constructor(dataService: DataService,
              router: Router) {
    this.dataService = dataService;
    this.router = router;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }

  loginSubmit = (): void => {
    this.router.navigate(['/content']).then(()=>{
      this.dataService.setData(this.constructor.name,'MainComponent',{test:123123});
      this.dataService.setData(this.constructor.name,'MainComponent',{test11:222222});
    })
  }

}
