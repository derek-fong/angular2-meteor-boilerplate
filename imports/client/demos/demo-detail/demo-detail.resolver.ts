import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { DemoService } from '../shared/demo.service';

@Injectable()
export class DemoDetailResolver implements Resolve<DemoItem> {
  constructor(private demoService: DemoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DemoItem> {
    return this.demoService.getDemoItem$((route.params as any).id).take(1);
  }
}
