import { NgModule } from '@angular/core';

import { COMPONENTS } from './components';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { questionnaireReducer } from './state/questionnaire.reducer';
import { QuestionnaireEffects } from './state/questionnaire.effects';
import { QuestionnaireRouterModule } from './questionnaire.router.module';
import { SERVICES } from '../questionnaire/services/index';

@NgModule({
  imports: [
    QuestionnaireRouterModule,
    StoreModule.forFeature('questionnaire', questionnaireReducer),
    EffectsModule.forFeature([ QuestionnaireEffects ]),
    SharedModule
  ],
  declarations: [...COMPONENTS],
  providers: [...SERVICES]
})
export class QuestionnaireModule { }
