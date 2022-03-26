import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from '../../../shared/services/todos.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {

  list: Todo[] = [];

  constructor(private todosService: TodosService,
    private listService: ListService) {
  }

  ngOnInit() {


    this.listService.getList(0); //SETANDO A LISTA
    this.listService.list$
      .subscribe(list => this.list = list.slice(0, 10));

    // this.listService.list$
    //   .subscribe(list => {

    //     if (!list || !list.length) {

    //       this.todosService.getList(0)
    //         .subscribe(list => {
    //           this.listService.list = list;
    //         });
    //     } else {
    //       this.list = list;
    //     }

    //   });

    // this.todosService.getList(0)
    //   .subscribe(list => {
    //     this.list = list
    //     this.listService.list = list;
    //   });

    /*Economizar um reques na troca de pagina */
    // if (this.listService.list.length === 0) {
    //   this.todosService.getList(0)
    //     .subscribe(list => {
    //       this.list = list
    //       this.listService.list = list;
    //     });
    // } else {
    //   this.list = this.listService.list.slice(0, 10);
    // }

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
