import { INCREMENT } from '../actions/counter';

const initialState = {
    counter: 0,
}

export interface ICounterState {
    counter: number
}
export interface ICounterAction {
    type: string
}

export const counterReducer = (state: ICounterState = initialState, action: ICounterAction): ICounterState => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state;
    }
}