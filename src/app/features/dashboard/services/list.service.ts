import { Injectable } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';

@Injectable()
export class ListService {

  private _list: Todo[] = [];

  page: number = 0;

  get list(): Todo[] {
    return this._list;
  }

  set list(value: Todo[]) {
    this._list = value;
  }

} 
