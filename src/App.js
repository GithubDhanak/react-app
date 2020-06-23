import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App.jsx'
import ReactDOM from 'react-dom'

/*function App() {
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
        <p> Welcome to Student Result website</p>
      </header>
     
    </div>
  );
}

export default App;
*/
export default App;
ReactDOM.render(<App/> , document.getElementById('root'));
//export default App;