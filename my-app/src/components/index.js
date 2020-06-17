import React from 'react';
import './style.css';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zmiany: "Hello World"
        }
    }

    handleClick() {
        alert("Klikłem");
        this.setState({
            zmiany: "Elo elo 3 2 0"
        })
    }

    render() {

        return (
            <div className="fajna-klasa">
                <h1 onClick={this.handleClick.bind(this)}>{this.state.zmiany}</h1>
            </div>
        )
    }
}

export default HelloWorld;