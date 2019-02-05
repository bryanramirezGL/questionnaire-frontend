import { createFeatureSelector, createSelector, Action } from '@ngrx/store';

// import { Actions, Types } from './questionnaire.actions';

export interface QuestionnaireState {
  currentQuestionnairy: any[];
}

export const initialState: QuestionnaireState = {
  currentQuestionnairy: null,
};

export function questionnaireReducer(
  state: QuestionnaireState = initialState,
  action: Action
): QuestionnaireState {
  switch (action.type) {
    default:
      return state;
  }
}

export const selectInboxState = createFeatureSelector<QuestionnaireState>('questionnaire');
