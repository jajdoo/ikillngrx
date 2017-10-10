import { Action } from "@ngrx/store";

export const CHANGE_NAV_VISIBILITY = "[App] Change Nav Visibility";

export class ChangeNavVisibility implements Action {
    readonly type = CHANGE_NAV_VISIBILITY;
    constructor(public visible: boolean) {}
}

export type Actions = ChangeNavVisibility;
