import { selector } from 'recoil';
import { todoListState } from '../atom/todo';
import { todoListFilterState } from '../atom/filter';

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isCompleted);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isCompleted);
            default:
                return list;
        }
    },
});


export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isCompleted).length;
        const totalUncompletedNum = todoList.filter((item) => !item.isCompleted).length;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});