import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import template from './demo-list.component.html';
import style from './demo-list.component.scss';
import { DemoService } from '../shared/demo.service';

@Component({
  styles: [style],
  template
})
export class DemoListComponent implements OnInit {
  private demoItems$: Observable<DemoItem[]>;

  constructor (private demoService: DemoService) {}

  ngOnInit(): void {
    this.demoItems$ = this.demoService.allDemos$;
  }
}
