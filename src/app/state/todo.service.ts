import { Injectable } from '@angular/core';
import {Todo} from './todo.model';
import { of } from 'rxjs';

@Injectable()
export class TodoService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;
  todos: Todo[] = []; // [<Todo>{ id: 0, title: 'sample'}];

  constructor() { }

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    // todo.complete = false;
    this.todos.push(todo);
    return of(true);
  }

  delete(id: number) {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return of(true);
  }

  getAllTodos() {
    return of(this.todos);
  }

  getTodoById(id: number):  Todo | any {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo) {
    const index = this.todos.findIndex((item => item.id === todo.id));
    this.todos[index].complete = !todo.complete;
    return of(true);
  }
}
