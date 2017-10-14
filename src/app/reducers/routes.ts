import {Params, RouterStateSnapshot, Routes} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';
import {HateContainerComponent} from '../containers/hate-container/hate-container.component';
import {PageNotFoundComponent} from '../containers/page-not-found/page-not-found.component';

export interface RouterState {
  url: string;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    // Only return an object including the URL and query params
    // instead of the entire snapshot
    return { url, queryParams };
  }
}

export const appRoutes: Routes = [
  { path: 'hate', component: HateContainerComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '',
    redirectTo: '/hate',
    pathMatch: 'full'
  },
];
