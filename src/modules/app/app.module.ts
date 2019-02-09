import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { AppRouterModule } from './app.router.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';
import { reducers } from './state/app.reducer';
import { SERVICES } from './services';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    AppRouterModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
  ],
  providers: [
    ...SERVICES,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class PizzaPartyAppModule { }
