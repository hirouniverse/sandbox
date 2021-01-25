import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, ITodoItem } from '../recoil/atom/todo';

type TProps = {
    item: ITodoItem
}

export const TodoItem: FC<TProps> = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState<ITodoItem[]>(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });
        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isCompleted: !item.isCompleted,
        });
        setTodoList(newList);
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={ item.text} onChange={ editItemText } />
            <input type="checkbox" value={ item.isCompleted.toString() } onChange={ toggleItemCompletion } />
            <button onClick={ deleteItem }>X</button>
        </div>
    );
}

function replaceItemAtIndex(arr: ITodoItem[], index: number, newValue: ITodoItem) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: ITodoItem[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}