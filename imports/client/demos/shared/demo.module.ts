import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoService } from './demo.service';
import { DemosComponent } from './demos.component';
import { demosRouting } from './demos.routing';
import { DemoDetailComponent } from '../demo-detail/demo-detail.component';
import { DemoDetailResolver } from '../demo-detail/demo-detail.resolver';
import { DemoListComponent } from '../demo-list/demo-list.component';

@NgModule({
  imports: [
    CommonModule,
    demosRouting
  ],
  declarations: [
    DemoDetailComponent,
    DemoListComponent,
    DemosComponent
  ],
  providers: [
    DemoDetailResolver,
    DemoService
  ]
})
export class DemoModule {}
