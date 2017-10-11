import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AppComponent} from './containers/app/app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers/index';
import {CommonModule} from '@angular/common';
import {HateStasStatusComponent} from './components/hate-stat-status/hate-stas-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HateStasStatusComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
