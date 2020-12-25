// https://engineering.datorama.com/mastering-drag-drop-with-reactjs-part-01-39bed3d40a03
import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
    onDragStart?: () => void;
    onDrag?: ({ translateX, translateY}: { translateX: number, translateY: number }) => void;
    onDragEnd?: () => void;
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

type TPositionType = {
    clientX: number
    clientY: number
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

    handleMouseDown = ({ clientX, clientY }: TPositionType) => {
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

    handleMouseMove = ({ clientX, clientY }: TPositionType) => {
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
    onMouseDown: ({ clientX, clientY }: TPositionType ) => void
    x: number
    y: number
    isDragging: boolean
}

// this section doesn't work because you should pass mapping to 'style' attr
const Container = styled.div.attrs({
    style: ({ x, y }: {x: number, y: number}) => ({
      transform: `translate(${x}px, ${y}px)`
    }),
  })<IContainerProps>`
    cursor: grab;

    ${({ isDragging }) =>
    isDragging && css`
        opacity: 0.8;
        cursor: grabbing;
    `};
`;