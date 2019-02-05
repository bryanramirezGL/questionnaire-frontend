import { Action } from '@ngrx/store';

export enum Types {
  REDIRECT_USER = '[app] redirect user',
  SET_BUSSY_STATE = '[app] set bussy state',
}

export class RedirectUser implements Action {
  type: string = Types.REDIRECT_USER;

  constructor(public payload: { path: string } = { path: '' }) { }
}

export class SetBussyState implements Action {
  type: string = Types.SET_BUSSY_STATE;

  constructor(public payload: boolean) { }
}

export type Actions =
  | SetBussyState
  | RedirectUser;
