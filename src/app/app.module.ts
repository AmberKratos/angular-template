/**
 * 模块部分
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

/**
 * 组件部分
 */
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

/**
 * 服务部分
 */
import {AjaxService} from './services/ajaxService/ajax.service';
import {DataService} from './services/dataService/data.service';

/**
 * 统一请求拦截器
 */
import {UnifiedInterceptor} from './interceptors/unifiedInterceptor/unified.interceptor';

/**
 * 其他部分
 */
import {Subject} from 'rxjs';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [       //组件注册
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent
  ],
    imports: [           //功能模块注册
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [         //服务注册
    AjaxService,
    DataService,
    Subject,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnifiedInterceptor,  //自定义拦截器的类名
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
