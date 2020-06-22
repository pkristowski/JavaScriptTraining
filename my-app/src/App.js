import React from 'react';
import logo from './logo.svg';
import './App.css';
import jakisDomyslny, { testowa, zmienna, zmienna2, zmienna3, zmienna4 } from './App.const.js';
import HelloWorld from './components';
import Clock from './components/clock';
import Message from './components';
import Click from './components';
import Image from './components/image';

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

        <Click defaultValue ={3}/>
        <Click defaultValue ={7}/>
        <Click defaultValue ={12}/>

        <Message title="tytul komponentu">
          <p>Ala ma kota lorem impsum</p>

        </Message>

        <Image src ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sketchappsources.com%2Fresources%2Fsource-image%2Fnyan-cat-artoctober.png&f=1&nofb=1" />

      </header>

    </div>
  );
}

export default App;
