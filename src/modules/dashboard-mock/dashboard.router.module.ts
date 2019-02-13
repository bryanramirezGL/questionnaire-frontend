import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMockComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: DashboardMockComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule {}
