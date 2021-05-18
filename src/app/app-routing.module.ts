import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {CanActivateGuard} from './guards/canActivate/can-activate.guard';
import {LoadingResolver} from './resolvers/loadingResolver/loading.resolver';
import {CanLoadGuard} from './guards/canLoad/can-load.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'content',
    component: MainComponent,
    canActivate: [
      CanActivateGuard
    ],
    resolve: {
      load: LoadingResolver
    },
    children: []
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
