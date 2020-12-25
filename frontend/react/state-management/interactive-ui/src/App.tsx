import { Draggable } from './components/Draggable';
import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #CCCCCC;
`;

export const App = () => {
  return (
    <div className="App">
      <Draggable>
        <Box />
      </Draggable>
    </div>
  );
}