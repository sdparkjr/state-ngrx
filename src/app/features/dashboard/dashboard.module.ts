import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'List',
        component: ListComponent,
      }
    ])
  ],
  declarations: [
    DashboardComponent
    , ListComponent
  ]
})
export class DashboardModule { }
