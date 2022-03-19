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
  page = 0;

  constructor(private todosService: TodosService,
  ) { }

  ngOnInit() {

    this.todosService.getList(0)
      .subscribe(list => this.list = list);

  }


  loadMore() {
    this.page++;
    this.todosService.getList(this.page)
      .subscribe(list => this.list = [...this.list, ...list]);
  }

  onDelete(id: number) {
    this.todosService.remove(id)
      .subscribe((result) => {
        this.list = this.list.filter(item => item.id !== id);
      });
  }

  markAsDone(id: number) {
    this.todosService.toggleDone(id)
      .subscribe(todo => {

        this.list = this.list.map((item) => {
          return item.id === todo.id ? todo : item;
        })

      })

  }

}
