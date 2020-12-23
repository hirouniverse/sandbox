import { Component } from 'react';
import { MainComponent } from './MainComponent';
import { ICounterState } from "../redux/reducer/counter";
import { incrementActionCreator } from '../redux/actions/counter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface IProps {
    counter: number,
    increment: () => void
}

export class ReduxComponentExample extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        let { counter, increment } = this.props;
        return (
            <div>
                <MainComponent
                    count={counter}
                    handleFireClick={() => increment() }
                    example="Redux Component Example" />
            </div>
        )
    }
}

const mapStateToProps = (state: ICounterState) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        increment: () => dispatch(incrementActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponentExample);