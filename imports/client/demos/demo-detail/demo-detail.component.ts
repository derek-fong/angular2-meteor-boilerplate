import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import template from './demo-detail.component.html';
import style from './demo-detail.component.scss';

@Component({
  styles: [style],
  template
})
export class DemoDetailComponent implements OnInit {
  private demoItem: DemoItem;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.forEach((data: { demoItem: DemoItem }) => {
      this.demoItem = data.demoItem;
    });
  }
}
