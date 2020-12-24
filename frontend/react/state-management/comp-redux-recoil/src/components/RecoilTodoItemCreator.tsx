import { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, ITodoItem } from '../recoil/atoms/todo';

let id = 5;
function getId() {
    return ++id;
}

export const RecoilTodoItemCreator: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [, setTodoList] = useRecoilState<ITodoItem[]>(todoListState);

    function handleAdd(): void {
        if (!inputValue && inputValue === '') {
            return;
        }
        setTodoList((oldValues) => {
            return [
                ...oldValues,
                {
                    id: getId(),
                    title: inputValue,
                    completed: false
                }
            ]
        });
        setInputValue('');
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}