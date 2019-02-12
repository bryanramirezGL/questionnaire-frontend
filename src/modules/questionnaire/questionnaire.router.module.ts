import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionnaireEditComponent, QuestionnaireListComponent, QuestionnaireSsoComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  },
  {
    path: 'open/:id',
    component: QuestionnaireEditComponent
  },
  {
    path: 'list',
    component: QuestionnaireListComponent
  },
  {
    path: 'sso',
    component: QuestionnaireSsoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRouterModule {}
