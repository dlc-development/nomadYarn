import {lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Link, Redirect } from "@reach/router";
const Test = lazy(() => import('./Components/Test'));
const Test2 = lazy(() => import('./Components/Test2'));



function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <Test path='/' />
          <Test2 path='/asd' />
        </Router>
      </header>
    </div>
    
  );
}

export default App;
