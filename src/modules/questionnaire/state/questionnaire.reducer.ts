import { createFeatureSelector, createSelector, Action } from '@ngrx/store';
import { Actions, Types, GetQuestionnaire } from './questionnaire.actions';
import { IQuestionnaire } from '../../app/models';

export interface QuestionnaireState {
  currentQuestionnairy: IQuestionnaire;
}

export const initialState: QuestionnaireState = {
  currentQuestionnairy: null
};

export function questionnaireReducer(
  state: QuestionnaireState = initialState,
  action: Actions
): QuestionnaireState {
  switch (action.type) {
    case Types.GET_QUESTIONNAIRE:
      return { ...state, currentQuestionnairy: (action as GetQuestionnaire).payload };
    default:
      return state;
  }
}

export const selectQuestionnaireState = createFeatureSelector<QuestionnaireState>('questionnaire');
export const selectQuestionnaireBussyState = createSelector(
  selectQuestionnaireState,
  (state: QuestionnaireState) => state.currentQuestionnairy
);
