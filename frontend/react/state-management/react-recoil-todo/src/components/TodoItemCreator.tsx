import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { ITodoItem, todoListState } from '../recoil/atom/todo';

export const TodoItemCreator = () => {
    const [inputValue, setInputValue ] = useState<string>('');
    const setTodoList = useSetRecoilState<ITodoItem[]>(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList): ITodoItem[] => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isCompleted: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(value);
    };

    return (
        <div>
            <input type="text" value={ inputValue } onChange={ onChange } />
            <button onClick={ addItem }>Add</button>
        </div>
    );
}

let id = 0;
function getId() {
    return id++;
}