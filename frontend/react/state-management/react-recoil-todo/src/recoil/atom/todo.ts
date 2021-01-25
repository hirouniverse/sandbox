import { atom } from 'recoil';

export interface ITodoItem {
    id: number,
    text: string,
    isCompleted: boolean,
};

export const todoListState = atom<ITodoItem[]>({
    key: 'todoListState',
    default: []
});