import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo, DeleteTodo, TodoState, ToggleTodoComplete } from '../state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Select(TodoState.getTodos) todos$: Observable<Todo>;

  constructor(private store: Store) { }

  ngOnInit() {

  }

  toggleTodoComplete(todo: Todo) {
    this.store.dispatch(new ToggleTodoComplete(todo));
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(new DeleteTodo(todo.id));
  }

}
