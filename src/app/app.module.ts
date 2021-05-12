/**
 * 模块部分
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

/**
 * 组件部分
 */
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';

/**
 * 服务部分
 */
import {AjaxService} from './services/ajaxService/ajax.service';
import {DataService} from './services/dataService/data.service';

/**
 * 其他部分
 */
import {Subject} from 'rxjs';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [       //组件注册
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [           //功能模块注册
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [         //服务注册
    AjaxService,
    DataService,
    Subject
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
