import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from 'src/app/shared/services/todos.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Todo[] = [];  

  constructor(private todosService: TodosService,
    private listService: ListService
  ) { }

  ngOnInit() {

    // this.todosService.getList(0)
    //   .subscribe(list => this.list = list);
    this.list = this.listService.list;

  }


  loadMore() {
    this.listService.page++;
    this.todosService.getList(this.listService.page)
      .subscribe(list => {
        this.list = [...this.list, ...list]
        this.listService.list = this.list;

      });
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
