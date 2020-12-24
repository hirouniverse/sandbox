import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState, IToggleTodo } from '../recoil/atoms/todo';

const filters = [
    'all',
    'notCompleted',
    'completed'
];

export const RecoilTodoListFilters: FC = () => {
    const [filter, setFilter] = useRecoilState<IToggleTodo>(todoListFilterState);

    const updateFilter = ({ target: { value }}: React.ChangeEvent<HTMLSelectElement>) => {

        if (value === 'all' || value === 'notCompleted' || value === 'completed') {
            setFilter({
                visibility: value
            });
        } else {
            setFilter({
                visibility: 'all'
            })
        }
    }

    return (
        <>
            <label>Filter: 
                <select value={filter.visibility} onChange={updateFilter}>
                    {
                        filters.map(item => {
                            return <option key={item} value={item}>{ item }</option>
                        })
                    }
                </select>
            </label>
        </>
    )
}