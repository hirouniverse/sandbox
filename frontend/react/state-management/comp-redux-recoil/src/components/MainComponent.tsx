import React, { Component } from 'react';

export interface IProps {
    count: number,
    handleFireClick: () => void,
    example: string
}

export class MainComponent extends Component<IProps, {}, any> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        let { count, handleFireClick, example } = this.props;
        return (
            <div>
                <p>You fired using {example}</p>
                <p>
                    <span>{ count }</span>
                </p>
                <button onClick={handleFireClick}>
                    fire!
                </button>
            </div>
        )
    }
}