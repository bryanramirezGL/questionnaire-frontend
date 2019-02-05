import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/questionnaire',
    pathMatch: 'full'
  },
  {
    path: 'questionnaire',
    loadChildren: '../questionnaire/questionnaire.module#QuestionnaireModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
