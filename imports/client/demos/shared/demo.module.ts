import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoService } from './demo.service';
import { DemosComponent } from './demos.component';
import { demosRouting } from './demos.routing';
import { DemoDetailComponent } from '../demo-detail.component/demo-detail.component';
import { DemoListComponent } from '../demo-list.component/demo-list.component';

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
  providers: [DemoService]
})
export class DemoModule {}
