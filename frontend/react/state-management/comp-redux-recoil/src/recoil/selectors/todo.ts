import { selector } from 'recoil';
import { todoListState, todoListFilterState, ITodoItem, IToggleTodo } from '../atoms/todo';

export const filteredTodoListState = selector<ITodoItem[]>({
    key: 'FilteredTodoListState',
    get: ({ get }) => {
        const filter = get<IToggleTodo>(todoListFilterState);
        const list = get<ITodoItem[]>(todoListState);

        switch (filter.visibility) {
            case 'all':
                return list;
            case 'notCompleted':
                return list.filter(item => {
                    return !item.completed;
                });
            case 'completed':
                return list.filter(item => {
                    return item.completed;
                })
            default:
                return list;
        }
    }
});

export interface ITodoStatsState {
    totalNum: number;
    totalCompletedNum: number;
    totalUncompletedNum: number;
    percentCompleted: number
}

export const TodoListStatsState = selector<ITodoStatsState>({
    key: 'TodoListStatsState',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.completed).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted
        }
    }
});