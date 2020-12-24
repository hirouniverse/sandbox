import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { TodoListStatsState, ITodoStatsState } from '../recoil/selectors/todo';

export const RecoilTodoListStats: FC = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted
    } = useRecoilValue<ITodoStatsState>(TodoListStatsState);

    const formattedPercentCompleted = Math.floor(percentCompleted);

    return (
        <ul>
            <li>Total Items: { totalNum }</li>
            <li>Items completed: { totalCompletedNum }</li>
            <li>Items not completed: { totalUncompletedNum }</li>
            <li>Percent completed: { formattedPercentCompleted }</li>
        </ul>
    )
}