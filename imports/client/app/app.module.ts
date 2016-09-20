import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeteorModule } from 'angular2-meteor';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { DemoModule } from '../demos/shared/demo.module';

@NgModule({
  imports: [
    appRouting,
    BrowserModule,
    DemoModule,
    MeteorModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
