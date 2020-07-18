import React from 'react';
import './App.css';
import Background from './Components/Background';
import FourColumns from './Components/FourColumns';
import InfiniteScroll from './Components/InfiniteScroll';
import RandomImage from './Components/RandomImage';
import ColumnItem from './Components/ColumnItem';

function App() {

  function LoadArrayWithData(){

  let array = [["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5,6,7,8,9,10], ["ala", "ma", "kota"], [123, 456, 789]];

  return array;
  }

  var array= LoadArrayWithData();

  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <FourColumns>
          <ColumnItem>{array[0]}</ColumnItem>
          <ColumnItem>{array[1]}</ColumnItem>
          <ColumnItem>{array[2]}</ColumnItem>
          <ColumnItem>{array[3]}</ColumnItem>
        </FourColumns>
        {/* <RandomImage pictureNumber={155}/> */}
      </header>
    </div>
  );
}

export default App;
