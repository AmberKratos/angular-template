import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {CanActivateGuard} from './guards/canActivate/can-activate.guard';
import {LoadingResolver} from './resolvers/loadingResolver/loading.resolver';

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
    children: [

    ]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
