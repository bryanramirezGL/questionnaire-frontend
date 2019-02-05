import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  Types,
  RedirectUser,
} from './app.actions';

import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
  @Effect({ dispatch: false })
  redirectUser$: Observable<Action> = this.actions$.pipe(
    ofType(Types.REDIRECT_USER),
    tap((action: RedirectUser) =>
      this.router.navigate([action.payload.path])
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}
}


