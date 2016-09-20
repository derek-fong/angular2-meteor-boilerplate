import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

export const appRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', redirectTo: '/demos', pathMatch: 'full' }
]);
