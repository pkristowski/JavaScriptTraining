import React from 'react';
import './style.css';

class HelloWorld extends React.Component {

    render() {
    let zmiany = "Hello World";
    function handleClick(){
        alert("Klikłem");
        zmiany = "Elo elo 3 2 0";
        console.log(zmiany);
    }

    return(
        <div className="fajna-klasa">
            <h1 onClick={handleClick}>{zmiany}!</h1>
        </div>
    )
    }
}

export default HelloWorld;