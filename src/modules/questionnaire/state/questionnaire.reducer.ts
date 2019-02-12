import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Actions, Types, GetQuestionnaireSuccess, GetQuestionnairesSuccess } from './questionnaire.actions';
import { IQuestionnaire } from '../../app/models';

export interface QuestionnaireState {
  currentQuestionnaire: IQuestionnaire;
  currentQuestionnaires: IQuestionnaire[];
}

export const initialState: QuestionnaireState = {
  currentQuestionnaire: null,
  currentQuestionnaires: []
};

export function questionnaireReducer(
  state = initialState,
  action: Actions,
): QuestionnaireState {
  switch (action.type) {
    case Types.GET_QUESTIONNAIRE_SUCCESS:
      return { ...state, currentQuestionnaire: (action as GetQuestionnaireSuccess).payload };
    case Types.GET_QUESTIONNAIRES_SUCCESS:
      return { ...state, currentQuestionnaires: (action as GetQuestionnairesSuccess).payload };
    default:
      return state;
  }
}

export const selectQuestionnaireState = createFeatureSelector<QuestionnaireState>('questionnaire');

export const selectCurrentQuestionnaireState = createSelector(
  selectQuestionnaireState,
  (state: QuestionnaireState) => state.currentQuestionnaire
);

export const selectCurrentQuestionnairesState = createSelector(
  selectQuestionnaireState,
  (state: QuestionnaireState) => state.currentQuestionnaires
);