import { createFeatureSelector, ActionReducerMap, createSelector, Action } from '@ngrx/store';

import { Types, SetBussyState } from './app.actions';

export interface AppState {
  bussy: boolean;
}

export const initialState: AppState = {
  bussy: false,
};

export function reducer(
  state: AppState = initialState,
  action: Action
): AppState {
  switch (action.type) {
    case Types.SET_BUSSY_STATE:
      return { ...state, bussy: (action as SetBussyState).payload };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<any> = {
  app: reducer
};

export const selectAppState = createFeatureSelector<AppState>('app');
export const selectAppBussyState = createSelector(
  selectAppState,
  (state: AppState) => state.bussy
);
