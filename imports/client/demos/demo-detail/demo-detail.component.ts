import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import template from './demo-detail.component.html';
import style from './demo-detail.component.scss';

@Component({
  styles: [style],
  template
})
export class DemoDetailComponent implements OnInit {
  private demoItem: DemoItem;
  private enableEdit: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.forEach((data: { demoItem: DemoItem }) => {
      this.demoItem = data.demoItem;
    });
  }

  private onCancelEdit(): void {
    this.enableEdit = false;
  }

  private onEnableEdit(): void {
    this.enableEdit = true;
  }

  private onSubmit(): void {
    this.enableEdit = false;
    this.router.navigate(['/demos']);
  }
}
