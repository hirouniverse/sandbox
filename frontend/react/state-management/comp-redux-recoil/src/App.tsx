import { FC } from 'react';
import { ReduxFunctionalExample } from './components/ReduxFunctionalExample';
import { RecoilExample } from './components/RecoilExample';
import { RecoilTodoList } from './components/RecoilTodoList';
import { RecoilTodoItemCreator } from './components/RecoilTodoItemCreator';
import { RecoilTodoListFilters } from './components/RecoilTodoListFilters';
import { RecoilTodoListStats } from './components/RecoilTodoListStats';
import store from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { RecoilRoot } from 'recoil';

export const App: FC = () => {
  return (
    <div className="App">
      <h1>hello world</h1>
      <ReduxProvider store={store}>
        <ReduxFunctionalExample />
      </ReduxProvider>
      <RecoilRoot>
        <RecoilExample />
        <RecoilTodoListStats />
        <RecoilTodoListFilters />
        <RecoilTodoList />
        <RecoilTodoItemCreator />
      </RecoilRoot>
    </div>
  );
}

export default App;
