import {Action} from '@ngrx/store';

export const SET_STAS_HATERED = '[App] Set Stas Hateres';

export class SetStasHatered implements Action {
  readonly type = SET_STAS_HATERED;
  constructor(public hatred: boolean){}
}

export type Actions = SetStasHatered;
