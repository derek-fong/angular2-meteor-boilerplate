import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemosComponent } from './demos.component';
import { DemoDetailComponent } from '../demo-detail.component/demo-detail.component';
import { DemoListComponent } from '../demo-list.component/demo-list.component';

export const demosRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'demos',
    component: DemosComponent,
    children: [
      {
        path: '',
        component: DemoListComponent
      }, {
        path: ':id',
        component: DemoDetailComponent
      }
    ]
  }
]);
