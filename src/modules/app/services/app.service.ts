import { Injectable } from '@angular/core';
import { RedirectUser, SetBussyState } from '../state/app.actions';
import { Store, select } from '@ngrx/store';
import { AppState, selectAppBussyState } from '../state/app.reducer';
import { Observable } from 'rxjs';


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

  constructor(private appStore: Store<AppState>) {}
}
