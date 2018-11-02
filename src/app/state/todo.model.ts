export class Todo {
    id: number;
    title: string;
    complete: boolean;
}

export class TodoStateModel {
    todos: Todo[];
}

export const DEFAULT_STATE = <TodoStateModel> {
    todos: []
};
