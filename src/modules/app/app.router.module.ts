import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: '../dashboard-mock/dashboard.module#DashboardMockModule',
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
