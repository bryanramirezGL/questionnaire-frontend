import { Injectable } from '@angular/core';
import { RedirectUser, SetBussyState } from '../state/app.actions';
import { Store, select } from '@ngrx/store';
import { AppState, selectAppBussyState } from '../state/app.reducer';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class AppService {

  public appLoading$: Observable<boolean> = this.appStore.pipe(select(selectAppBussyState));

  public redirectUser({ path }: {path: string}): void {
    this.appStore.dispatch(new RedirectUser({path}));
  }

  public showLoading(): void {
    this.appStore.dispatch(new SetBussyState(true));
  }

  public hideLoading(): void {
    this.appStore.dispatch(new SetBussyState(false));
  }

  public handleError(errorResponse: HttpErrorResponse): Observable<any> {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

  constructor(private appStore: Store<AppState>) {}
}
