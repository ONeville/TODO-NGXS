import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { DEFAULT_STATE, TodoStateModel } from './todo.model';
import { AddTodo, DeleteTodo, LoadTodo, ToggleTodoComplete } from './todo.actions';
import { TodoService } from './todo.service';

@State<TodoStateModel>({
    name: 'todo',
    defaults: DEFAULT_STATE
})
export class TodoState implements NgxsOnInit {

    /**
     * Selectors
     */
    @Selector()
    static getTodos({ todos }: TodoStateModel) {
        return todos;
    }

    @Selector()
    static getTodoComplete({ todos }: TodoStateModel) {
        return todos.filter(item => item.complete);
    }

    constructor(private service: TodoService) {}

    ngxsOnInit({ dispatch }: StateContext<TodoStateModel>) {
        dispatch(new LoadTodo());
    }

    /**
     * Commands
     */
    @Action(AddTodo)
    add({ dispatch }: StateContext<TodoStateModel>, { payload }: AddTodo) {
        this.service.addTodo(payload).subscribe(() => dispatch(new LoadTodo()));
    }

    @Action(DeleteTodo)
    remove({ dispatch }: StateContext<TodoStateModel>, { payload }: DeleteTodo) {
        this.service.delete(payload).subscribe(() => dispatch(new LoadTodo()));
    }

    @Action(ToggleTodoComplete)
    toggleComplete({ dispatch }: StateContext<TodoStateModel>, { payload }: ToggleTodoComplete) {
        this.service.toggleTodoComplete(payload).subscribe(() => dispatch(new LoadTodo()));
    }


    /**
     * Events
     */
    @Action(LoadTodo)
    onLoadTodo({ patchState }: StateContext<TodoStateModel>) {
        this.service.getAllTodos().subscribe(item => {
            patchState({ todos: item });
        });
    }
}
