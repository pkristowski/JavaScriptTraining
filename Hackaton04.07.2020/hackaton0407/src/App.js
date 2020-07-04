import React from 'react';
import './App.css';
import Background from './Components/Background';
import FourColumns from './Components/FourColumns';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <FourColumns>
          <div>Test 1</div>
          <div>Test 2</div>
          <div>Test 3</div>
          <div>Test 4</div>
        </FourColumns>
      </header>
    </div>
  );
}

export default App;
