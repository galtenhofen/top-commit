/* import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { HomeService } from './home.service';

@Injectable()
export class HomeResolver implements Resolve<any> {

  constructor(private homeService: HomeService) { }

  resolve() {
    // Base Observable (where we get data from)
    const dataObservable: Observable<any> = this.homeService.getData();

    return { source: dataObservable };
  }
}
 */