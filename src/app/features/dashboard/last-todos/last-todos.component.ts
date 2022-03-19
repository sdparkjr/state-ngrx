import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {

  list: Todo[] = [];

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {

    this.todosService.getList(0)
      .subscribe(list => { this.list = list });

    // this.listService.getList(0);
    // this.listService.list$
    //   .subscribe(list => this.list = list.slice(0, 10));
  }

  markAsDone(id: number) {
    //this.listService.toggleDone(id);
  }

  //*recebendo do outro compoeneten 
  handleCreated(todo: Todo) {
    this.list = [todo, ...this.list];
  }

}
