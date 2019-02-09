import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import {
  QuestionnaireState,
  selectCurrentQuestionnaireState
} from '../state/questionnaire.reducer';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { IQuestionnaire } from '../../app/models';
import { AppService } from 'src/modules/app/services';
import { GetQuestionnaire } from '../state/questionnaire.actions';

@Injectable()
export class QuestionnaireService {
  public currentQuestionnaire$: Observable<
    IQuestionnaire
  > = this.questionnaireStore.pipe(select(selectCurrentQuestionnaireState));

  public loadCurrentQuestionnaire(id: number): void {
    // Dispatch action to get current questionnaire
    this.questionnaireStore.dispatch(new GetQuestionnaire({id}));
  }

  public getQuestionnairesByPersonId(personId: number): Observable<IQuestionnaire[]> {
    return this.httpClient
      .get<IQuestionnaire[]>(
        `${environment.apiUrl}/person/${personId}/questionnaires`
      )
      .pipe(catchError(this.appService.handleError));
  }

  public getQuestionnaire(questionnaireId: number): Observable<IQuestionnaire> {
    return this.httpClient
      .get<IQuestionnaire>(`${environment.apiUrl}/questionnaire/${questionnaireId}`)
      .pipe(catchError(this.appService.handleError));
  }

  public postQuestionnaireAnswers(questionnaireId: number, fields: any[]) {
    return this.httpClient
      .post<IQuestionnaire>(`${environment.apiUrl}/questionnaire/${questionnaireId}`, {
        questionnaire_id: questionnaireId,
        fields,
      })
      .pipe(catchError(this.appService.handleError));
  }

  constructor(
    private httpClient: HttpClient,
    private questionnaireStore: Store<QuestionnaireState>,
    private appService: AppService
  ) {}
}
