import { FC } from 'react'
import { MainComponent } from './MainComponent';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from '../recoil/atoms/counter';
import { incrementSelector } from '../recoil/selectors/counter';

export const RecoilExample: FC = () => {
    const [counter, setCounter] = useRecoilState<number>(counterState);
    let value = useRecoilValue<number>(incrementSelector);

    console.log(`counter: ${counter}`);
    console.log(`value: ${value}`);

    return (
        <div>
            <MainComponent
                count={counter}
                handleFireClick={() => setCounter(value)}
                example="Recoil Functional Component" />
        </div>
    )
}