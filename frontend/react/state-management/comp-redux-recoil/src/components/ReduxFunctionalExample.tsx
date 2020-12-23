import { MainComponent } from './MainComponent';
import { useSelector, useDispatch } from 'react-redux';
import { ICounterState } from '../redux/reducer/counter';
import { incrementActionCreator } from '../redux/actions/counter';

export const ReduxFunctionalExample = () => {
    const counter = useSelector<ICounterState, number>(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <MainComponent
                count={counter}
                handleFireClick={ () => dispatch(incrementActionCreator()) }
                example="Redux Functional Component" />
        </div>
    )
}