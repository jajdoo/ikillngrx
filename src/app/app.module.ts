import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AppComponent} from './containers/app/app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers/index';
import {CommonModule} from '@angular/common';
import {HateStasStatusComponent} from './components/hate-stat-status/hate-stas-status.component';
import {RouterModule} from '@angular/router';
import {HateContainerComponent} from './containers/hate-container/hate-container.component';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer, appRoutes} from './reducers/routes';
import {PageNotFoundComponent} from './containers/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HateContainerComponent,
    HateStasStatusComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    RouterModule.forRoot(appRoutes),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
