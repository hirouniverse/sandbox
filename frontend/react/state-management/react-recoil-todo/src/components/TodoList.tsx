import { useRecoilValue } from 'recoil';
import { todoListState, ITodoItem } from '../recoil/atom/todo';
import { filteredTodoListState } from '../recoil/selector/todo';

import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';
import { TodoListStats } from './TodoListStats';
import { TodoListFilters } from './TodoFilters';

export const TodoList: React.FunctionComponent = () => {
    const todoList = useRecoilValue<ITodoItem[]>(filteredTodoListState);

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
            
            { todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}