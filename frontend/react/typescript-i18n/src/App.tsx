import React from 'react';
import logo from './logo.svg';
import './App.css';

import './i18n'
import Greet from './components/lv1/Greet'
import ChangeLanguageButton from './components/lv1/ChangeLangButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greet />
        <ChangeLanguageButton />
      </header>
    </div>
  );
}

export default App;
