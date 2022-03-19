import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from 'src/app/shared/services/todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Todo[] = [];

  constructor(private todosService: TodosService,
  ) { }

  ngOnInit() {
  }

  loadMore() {

  }

  onDelete(id: number) {

  }

  markAsDone(id: number) {

  }

}
