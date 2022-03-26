import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  titleControl = new FormControl('');

  @Output() created = new EventEmitter

  list: Todo[] = [];

  constructor(private todoService: TodosService, private listService: ListService) {

    listService.list$.subscribe(list => this.list = list);

  }


  ngOnInit() {
  }

  save() {
    // this.todoService.create({ title: this.titleControl.value })
    //   .subscribe(todo => this.created.emit(todo));

    // this.todoService.create({ title: this.titleControl.value })
    //   .subscribe(todo => {
    //     this.listService.list = [todo, ...this.list]
    //   });
    debugger;
    this.listService.create(this.titleControl.value);

    /*após criar um service compartilhando os dados entre os componentes*/
    // this.todoService.create({ title: this.titleControl.value })
    //   .subscribe(todo => this.listService.list = [todo, ...this.listService.list])

  }

}
