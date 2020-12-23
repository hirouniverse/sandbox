import { selector } from 'recoil';
import { counterState } from '../atoms/counter';

export const incrementSelector = selector({
    key: 'incrementSelector',
    get: ({get}) => {
        const counter = get(counterState);
        return counter + 1;
    }
});