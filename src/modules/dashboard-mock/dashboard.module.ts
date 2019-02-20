import { NgModule } from '@angular/core';

import { COMPONENTS } from './components';
import { SharedModule } from '../shared/shared.module';
import { DashboardRouterModule } from './dashboard.router.module';

@NgModule({
  imports: [
    DashboardRouterModule,
    SharedModule,
  ],
  declarations: [...COMPONENTS],
})
export class DashboardMockModule { }
