import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  titleControl = new FormControl('');

  @Output() created = new EventEmitter

  list: Todo[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
  }

  save() {
    this.todoService.create({ title: this.titleControl.value })
      .subscribe(todo => this.created.emit(todo))
    // this.listService.create(this.titleControl.value);
  }

}
