import React from 'react';
import logo from './logo.svg';
import './App.css';
import jakisDomyslny, {testowa, zmienna, zmienna2, zmienna3, zmienna4} from './App.const.js';


function App() {
  //const zmienna = "Ala ma kota";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CodeMe! React lessons! 
          {testowa(' witam')}
          {jakisDomyslny()}
        </p>

        <p>
          {zmienna}, {zmienna3}, {zmienna2.b}, {zmienna4}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
