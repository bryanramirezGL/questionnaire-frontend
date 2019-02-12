import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionnaireEditComponent, QuestionnaireListComponent } from './components';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRouterModule {}
