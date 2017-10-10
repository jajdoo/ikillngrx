import * as fromNav from "./nav";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store/store";

export interface State {
    nav: fromNav.State;
}

export const reducers: ActionReducerMap<State> = {
    nav: fromNav.reducer
};

export const getNavState = createFeatureSelector<fromNav.State>("nav");

export const getNavVisibile = createSelector(getNavState, fromNav.getNavVisible);
