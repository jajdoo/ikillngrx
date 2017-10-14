import { storeFreeze } from 'ngrx-store-freeze';
import {ActionReducer, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import * as fromRouter from './routes';
import * as fromFeelings from './feelings';

export interface State {
  feelings: fromFeelings.State;
  router: RouterReducerState<fromRouter.RouterState>;
}

export const reducers: ActionReducerMap<State> = {
  feelings: fromFeelings.reducer,
  router: routerReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

// dev time reducers
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];


// feelings feature
export const getFeelingsState = createFeatureSelector<fromFeelings.State>('feelings');

// attribute selectors
export const getHateStas = createSelector(
  getFeelingsState,
  fromFeelings.getHateStas
);
