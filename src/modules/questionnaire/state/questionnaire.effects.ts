import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Types, PostQuestionnaireAnswers } from './questionnaire.actions';
import {
  GetQuestionnaire,
  GetQuestionnaires,
  GetQuestionnaireSuccess,
  GetQuestionnairesSuccess
} from './questionnaire.actions';
import { mergeMap, map } from 'rxjs/operators';
import { QuestionnaireService } from '../services';
import { IQuestionnaire } from 'src/modules/app/models';
import { RedirectUser } from 'src/modules/app/state/app.actions';

@Injectable()
export class QuestionnaireEffects {
  @Effect()
  getCurrentCuestionnaire$ = this.actions$.pipe(
    ofType(Types.GET_QUESTIONNAIRE),
    mergeMap((action: GetQuestionnaire) =>
      this.questionnaireService.getQuestionnaire(action.payload.id)
    ),
    map(
      (questionnaire: IQuestionnaire) =>
        new GetQuestionnaireSuccess(questionnaire)
    )
  );

  @Effect()
  getCurrentCuestionnaires$ = this.actions$.pipe(
    ofType(Types.GET_QUESTIONNAIRES),
    mergeMap((action: GetQuestionnaires) =>
      this.questionnaireService.getQuestionnairesByPersonId(action.payload.personId)
    ),
    map(
      (questionnaires: IQuestionnaire[]) =>
        new GetQuestionnairesSuccess(questionnaires)
    )
  );

  @Effect()
  postCurrentCuestionnaireAnswers$ = this.actions$.pipe(
    ofType(Types.POST_QUESTIONNAIRE_ANSWERS),
    mergeMap((action: PostQuestionnaireAnswers) =>
      this.questionnaireService.postQuestionnaireAnswers(
        action.payload.id,
        action.payload.answers
      )
    ),
    map(() => new RedirectUser({ path: 'questionnaire/list' }))
  );

  constructor(
    private actions$: Actions,
    private questionnaireService: QuestionnaireService
  ) {}
}
