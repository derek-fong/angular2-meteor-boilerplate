import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { DemoService } from './demo.service';
import { DemosComponent } from './demos.component';
import { demosRouting } from './demos.routing';
import { DemoDetailComponent } from '../demo-detail/demo-detail.component';
import { DemoDetailResolver } from '../demo-detail/demo-detail.resolver';
import { DemoUpsertItemComponent } from '../demo-upsert-item/demo-upsert-item.component';
import { DemoListComponent } from '../demo-list/demo-list.component';

@NgModule({
  imports: [
    CommonModule,
    demosRouting,
    MomentModule,
    ReactiveFormsModule
  ],
  declarations: [
    DemoDetailComponent,
    DemoListComponent,
    DemoUpsertItemComponent,
    DemosComponent
  ],
  providers: [
    DemoDetailResolver,
    DemoService
  ]
})
export class DemoModule {}
