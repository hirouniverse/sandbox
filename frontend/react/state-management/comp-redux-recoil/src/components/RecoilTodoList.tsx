import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { ITodoItem } from '../recoil/atoms/todo';
import { filteredTodoListState } from '../recoil/selectors/todo';
import { RecoilTodoItem } from './RecoilTodoItem';

export const RecoilTodoList: FC = () => {
    const todoList = useRecoilValue<ITodoItem[]>(filteredTodoListState)
    console.log(todoList);
    return (
        <ul>
            { todoList.map(item => {
                return (
                    <li key={item.id}>
                        <RecoilTodoItem item={item} />
                    </li>
                )
            })}
        </ul>
    )
}