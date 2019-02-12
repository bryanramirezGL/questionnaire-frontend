import { Action } from '@ngrx/store';
import { IQuestionnaire } from '../../app/models';

export enum Types {
  GET_QUESTIONNAIRE = '[questionnaire] get questionnaire',
  GET_QUESTIONNAIRES = '[questionnaire] get questionnaires by person',
  GET_QUESTIONNAIRE_SUCCESS = '[questionnaire] get questionnaire success',
  GET_QUESTIONNAIRES_SUCCESS = '[questionnaire] get questionnaires by person success',
  POST_QUESTIONNAIRE_ANSWERS = '[questionnaire] post questionnaire answers',
}

export class GetQuestionnaire implements Action {
  readonly type = Types.GET_QUESTIONNAIRE;
  constructor(
    public payload: {
      id: number | null;
    } = { id: null }
  ) {}
}

export class  GetQuestionnaireSuccess implements Action {
  readonly type = Types.GET_QUESTIONNAIRE_SUCCESS;
  constructor(public payload: IQuestionnaire) {}
}

export class PostQuestionnaireAnswers implements Action {
  readonly type = Types.POST_QUESTIONNAIRE_ANSWERS;
  constructor(public payload: {
      id: number | null;
      answers: any[] | null;
    } = { id: null, answers: null }
  ) {}
}

export class GetQuestionnaires implements Action {
  readonly type = Types.GET_QUESTIONNAIRES;
  constructor(
    public payload: {
      personId: number | null;
    } = { personId: null }
  ) {}
}

export class GetQuestionnairesSuccess implements Action {
  readonly type = Types.GET_QUESTIONNAIRES_SUCCESS;
  constructor(public payload: IQuestionnaire[]) {}
}
  
export type Actions = GetQuestionnaire 
  | GetQuestionnaireSuccess 
  | GetQuestionnaires 
  | GetQuestionnairesSuccess;
