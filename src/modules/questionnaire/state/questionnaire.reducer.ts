import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Actions, Types, GetQuestionnaireSuccess } from './questionnaire.actions';
import { IQuestionnaire } from '../../app/models';

export interface QuestionnaireState {
  currentQuestionnaire: IQuestionnaire;
}

export const initialState: QuestionnaireState = {
  currentQuestionnaire: null
};

export function questionnaireReducer(
  state: QuestionnaireState = initialState,
  action: Actions,
): QuestionnaireState {
  switch (action.type) {
    case Types.GET_QUESTIONNAIRE_SUCCESS:
      return { ...state, currentQuestionnaire: (action as GetQuestionnaireSuccess).payload };
    default:
      return state;
  }
}

export const selectQuestionnaireState = createFeatureSelector<QuestionnaireState>('questionnaire');
export const selectCurrentQuestionnaireState = createSelector(
  selectQuestionnaireState,
  (state: QuestionnaireState) => state.currentQuestionnaire
);
