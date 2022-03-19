import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {

  //list: Todo[] = [];

  list = [{
    id: 0,
    createdAt: new Date(),
    title: 'a',
    done: true,
  },  {
    id: 1,
    createdAt: new Date(),
    title: 'b',
    done: false,
  }];

  constructor() {
  }

  ngOnInit() {
    // this.listService.getList(0);

    // this.listService.list$
    //   .subscribe(list => this.list = list.slice(0, 10));
  }

  markAsDone(id: number) {
    //this.listService.toggleDone(id);
  }

}
