import { atom } from 'recoil';

export interface ITodoItem {
    id: number,
    title: string;
    completed: boolean;
}

export const todoStateKey = 'todo';

export const todoListState = atom<ITodoItem[]>({
    key: todoStateKey,
    default: [
        { id: 1, title: 'todo - 1', completed: false },
        { id: 2, title: 'todo - 2', completed: false },
        { id: 3, title: 'todo - 3', completed: true },
        { id: 4, title: 'todo - 4', completed: true },
        { id: 5, title: 'todo - 5', completed: false },
    ]
});

export interface IToggleTodo {
    visibility: 'all' | 'notCompleted' | 'completed'
}
export const todoListFilterStateKey = 'TodoFilter';
export const todoListFilterState = atom<IToggleTodo>({
    key: todoListFilterStateKey,
    default: {
        visibility: 'all'
    }
});