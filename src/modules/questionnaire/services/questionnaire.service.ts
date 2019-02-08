import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, from } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { environment } from '../../../environments/environment'

import { IQuestionnaire } from '../../shared/models/questionnaire.model'

const ROUTE_PATH = 'questionnaire/';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private baseUrl : string = environment.apiUrl + ROUTE_PATH;

  constructor(private httpClient: HttpClient) { }

  getQuestionnaires(): Observable<IQuestionnaire[]> {
    return this.httpClient.get<IQuestionnaire[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  getQuestionnaire(id: number): Observable<IQuestionnaire> {
    return this.httpClient.get<IQuestionnaire>(this.baseUrl + id).pipe(catchError(this.handleError));
  }

  addQuestionnaire(questionnaire : IQuestionnaire): Observable<IQuestionnaire>{
    return this.httpClient.post<IQuestionnaire>(this.baseUrl, questionnaire).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    } 
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }
}
