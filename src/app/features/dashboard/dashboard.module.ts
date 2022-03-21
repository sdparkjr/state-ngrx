import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LastTodosComponent } from './last-todos/last-todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListService } from './services/list.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      }
    ])
  ],
  declarations: [
    DashboardComponent,
    ListComponent,
    LastTodosComponent,
    CreateTodoComponent
  ],
  providers: [ListService]
})
export class DashboardModule { }
