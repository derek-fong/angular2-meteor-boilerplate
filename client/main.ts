import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Meteor } from 'meteor/meteor';

import { AppModule } from '../imports/client/app/app.module';

Meteor.startup(function(): void {
  if (Meteor.isProduction) {
    enableProdMode();
  }
  platformBrowserDynamic().bootstrapModule(AppModule);
});
