import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingResolver implements Resolve<boolean> {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    console.log(123213123123132)
    return of(true);

  }
}
