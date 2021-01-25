import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil/atom/filter';

export const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(value);
    };

    return (
        <>
            Filter: 
            <select value={ filter } onChange={ updateFilter }>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
}