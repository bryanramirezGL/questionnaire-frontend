import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionnaireEditComponent } from './components/questionnaire-edit/questionnaire-edit.component';
import { QuestionnaireListComponent } from './components/questionnaire-list/questionnaire-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  },
  {
    path: 'edit',
    component: QuestionnaireEditComponent
  },
  {
    path: 'list',
    component: QuestionnaireListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRouterModule {}
