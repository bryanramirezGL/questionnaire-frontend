import { NgModule } from '@angular/core';

import { COMPONENTS } from './components';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { questionnaireReducer } from './state/questionnaire.reducer';
import { QuestionnaireEffects } from './state/questionnaire.effects';
import { QuestionnaireRouterModule } from './questionnaire.router.module';
import { SERVICES } from './services';

/* Angular Material */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const MaterialsModules = [
  MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule
];

@NgModule({
  imports: [
    QuestionnaireRouterModule,
    StoreModule.forFeature('questionnaire', questionnaireReducer),
    EffectsModule.forFeature([ QuestionnaireEffects ]),
    SharedModule,
    ...MaterialsModules
  ],
  declarations: [...COMPONENTS],
  providers: [...SERVICES]
})
export class QuestionnaireModule { }
