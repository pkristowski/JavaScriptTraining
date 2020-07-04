import React from 'react';
import './App.css';
import Background from './Components/Background';
import FourColumns from './Components/FourColumns';
import InfiniteScroll from './Components/InfiniteScroll';
import RandomImage from './Components/RandomImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <FourColumns>
          <InfiniteScroll  items={[1, 2, 3]}/>
          <InfiniteScroll  items={[1, 2, 3]}/>
          <InfiniteScroll  items={[1, 2, 3]}/>
          <InfiniteScroll  items={[1, 2, 3]}/>
        </FourColumns>
      <RandomImage />
      </header>
    </div>
  );
}

export default App;
