import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, ITodoItem } from '../recoil/atoms/todo';

type TProps = {
    item: ITodoItem
}

export const RecoilTodoItem: FC<TProps> = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState<ITodoItem[]>(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            title: value
        });
        setTodoList(newList);
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            completed: !item.completed
        });
        setTodoList(newList);
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    }

    const replaceItemAtIndex = (arr: ITodoItem[], index: number, newValue: ITodoItem): ITodoItem[] => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }

    const removeItemAtIndex = (arr: ITodoItem[], index: number) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    return (
        <div>
            <input type="text" value={item.title} onChange={editItemText} />
            <input
                type="checkbox"
                checked={item.completed}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    )
}