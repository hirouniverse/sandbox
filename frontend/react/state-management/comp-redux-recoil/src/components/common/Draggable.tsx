import React from 'react';
import styled from 'styled-components';

interface IProps {
    onDragStart: () => void;
    onDrag: ({ translateX, translateY}: { translateX: number, translateY: number }) => void;
    onDragEnd: () => void;
}

interface IState {
    isDragging: boolean;
    originalX: number;
    originalY: number;

    translateX: number;
    translateY: number;

    lastTranslateX: number;
    lastTranslateY: number;
}

export class Draggable extends React.Component<IProps, IState> {
    state = {
        isDragging: false,

        originalX: 0,
        originalY: 0,

        translateX: 0,
        translateY: 0,

        lastTranslateX: 0,
        lastTranslateY: 0,
    };

    componentWillUnmount() {
        window.removeEventListener('mouseover', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseDown = ({ clientX, clientY }: {clientX: number, clientY: number}) => {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);

        if (this.props.onDragStart) {
            this.props.onDragStart();
        }

        this.setState({
            originalX: clientX,
            originalY: clientY,
            isDragging: true
        });
    };

    handleMouseMove = ({ clientX, clientY }: {clientX: number, clientY: number}) => {
        const { isDragging } = this.state;
        const { onDrag } = this.props;

        if (!isDragging) {
            return;
        }

        this.setState(prevState => ({
            translateX: clientX - prevState.originalX + prevState.lastTranslateX,
            translateY: clientY - prevState.originalY + prevState.lastTranslateY, 
        }), () => {
            if (onDrag) {
                onDrag({
                    translateX: this.state.translateX,
                    translateY: this.state.translateY
                })
            }
        });
    }

    handleMouseUp = () => {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);

        this.setState({
            isDragging: false,

            originalX: 0,
            originalY: 0,

            lastTranslateX: this.state.translateX,
            lastTranslateY: this.state.translateY
        },
        () => {
            if (this.props.onDragEnd) {
                this.props.onDragEnd();
            }
        });
    };

    render() {
        const { children } = this.props;
        const { translateX, translateY, isDragging } = this.state;

        return (
            <Container
                onMouseDown={this.handleMouseDown}
                x={translateX}
                y={translateY}
                isDragging={isDragging}
            >
                { children }
            </Container>
        );
    }
}

type IContainerProps = {
    onMouseDown: () => void
    x: number
    y: number
    isDragging: boolean
}

const Container = styled.div.attrs({
    style: ({ x, y }: { x: number, y: number }) => ({
        transform: `translate(${x}pxm ${y}px)`
    }),
})`
    cursor: grab;

    ${({ isDragging }) =>
    isDragging && css`
        opacity: 0.8;
        cursor: grabbing;
    `};
`;