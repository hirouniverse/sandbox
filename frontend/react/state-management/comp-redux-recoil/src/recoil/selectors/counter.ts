import { selector } from 'recoil';
import { counterState } from '../atoms/counter';

export const incrementSelector = selector<number>({
    key: 'incrementSelector',
    get: ({ get }) => {
        const counter = get(counterState);
        return counter + 1;
    }
});