import React from 'react';
import logo from './logo.svg';
import './App.css';
import jakisDomyslny, { testowa, zmienna, zmienna2, zmienna3, zmienna4 } from './App.const.js';
import HelloWorld from './components';
import Clock from './components/clock';
import Message from './components';


// function App() {
//   //const zmienna = "Ala ma kota";

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <Clock />
//           CodeMe! React lessons!
//           {testowa(' witam')}
//           {jakisDomyslny()}
//         </p>

//         <p>
//           {zmienna}, {zmienna3}, {zmienna2.b}, {zmienna4}
          
//         </p>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  const zmiennaZTytulem = "Ala ma kota";
  const tytulZFunkcji = () => 'zwraca jakis tytlu z funkcji';

  return (
    <div className="App">
      <header className="App-header">

        <Message title="tytul komponentu">
          <p>Ala ma kota lorem impsum</p>
          <p>Ala ma kota lorem impsum</p>
          <p>Ala ma kota lorem impsum</p>
          <p>Ala ma kota lorem impsum</p>
        </Message>
        </header>
    </div>
  );
}

export default App;
