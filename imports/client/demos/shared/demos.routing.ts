import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemosComponent } from './demos.component';
import { DemoDetailComponent } from '../demo-detail/demo-detail.component';
import { DemoDetailResolver } from '../demo-detail/demo-detail.resolver';
import { DemoListComponent } from '../demo-list/demo-list.component';


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
        component: DemoDetailComponent,
        resolve: { demoItem: DemoDetailResolver }
      }
    ]
  }
]);
