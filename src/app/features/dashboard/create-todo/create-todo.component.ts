import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  titleControl = new FormControl('');

  list: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
   // this.listService.create(this.titleControl.value);
  }

}
