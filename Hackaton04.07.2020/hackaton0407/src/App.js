import React from 'react';
import './App.css';
import Background from './Components/Background';
import FourColumns from './Components/FourColumns';
import RandomImage from './Components/RandomImage';
import ColumnItem from './Components/ColumnItem';

function App() {

  function LoadArrayWithData(){
  let randomNumber = Math.floor((Math.random() * 12) + 1);
  let array = [[ <RandomImage/>, <RandomImage/>,<RandomImage/>], [ <RandomImage/>, <RandomImage/>,<RandomImage/>], [ <RandomImage/>, <RandomImage/>,<RandomImage/>], [ <RandomImage/>, <RandomImage/>,<RandomImage/>]];

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
