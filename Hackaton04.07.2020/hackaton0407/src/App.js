import React from 'react';
import './App.css';
import Background from './Components/Background';
import FourColumns from './Components/FourColumns';
import InfiniteScroll from './Components/InfiniteScroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <FourColumns>
          <InfiniteScroll />
          <InfiniteScroll />
          <InfiniteScroll />
          <InfiniteScroll />
        </FourColumns>
      </header>
    </div>
  );
}

export default App;
