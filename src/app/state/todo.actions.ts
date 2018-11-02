import { Todo } from './todo.model';

export class AddTodo {
    static readonly type = '[TODO] Add';
    constructor(public payload: Todo) {}
}

export class DeleteTodo {
    static readonly type = '[TODO] Remove';
    constructor(public payload: number) {}
}

export class ToggleTodoComplete {
    static readonly type = '[TODO] ToggleTodoComplete';
    constructor(public payload: Todo) {}
}

export class LoadTodo {
    static readonly type = '[TODO] Load all';
}
