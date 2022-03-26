import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../../shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';

@Injectable()
export class ListService {

  page: number = 0;
  private listSubject = new BehaviorSubject<Todo[]>([]);

  constructor(private todosService: TodosService) { }

  get list$(): Observable<Todo[]> {
    return this.listSubject.asObservable();
  }

  set list(value: Todo[]) {
    this.listSubject.next(value);
  }

  create(title: string) {
    this.todosService.create({ title: title })
      .subscribe(todo => {
        this.list = [todo, ...this.listSubject.value]
      });
  }


  getList(page: number) {

    this.todosService.getList(page)
      .subscribe(list => {
        if (page === 0) {
          debugger;
          this.list = list;
        } else {
          this.list = [...this.listSubject.value, ...list];
          /*pegando o ultimo valor carregado e concatenando com a nova lista*/
        }
      });

  }

  // private _list: Todo[] = [];

  // page: number = 0;

  // get list(): Todo[] {
  //   return this._list;
  // }

  // set list(value: Todo[]) {
  //   this._list = value;
  // }

} 
