import { Action } from '@ngrx/store';
import { IQuestionnaire } from '../../app/models';

export enum Types {
    GET_QUESTIONNAIRE = '[questionnaire] get questionnaire',
    UPDATE_QUESTIONNAIRE = '[questionnaire] update questionnaire',
    CREATE_QUESTIONNAIRE = '[questionnaire] create questionnaire',
    DELETE_QUESTIONNAIRE = '[questionnaire] delete questionnaire'
}

export class GetQuestionnaire implements Action {
    readonly type = Types.GET_QUESTIONNAIRE;
    constructor(public payload: IQuestionnaire) {}
}

export type Actions = GetQuestionnaire;
