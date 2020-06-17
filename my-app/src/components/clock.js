import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    handleClick() {
        alert("Klik");
        this.setState({
            date: new Date()
        })
    }

    render() {

        return (
            <div>
                <h1>Hello, world!</h1>
                <h2 onClick={this.handleClick.bind(this)}>Is it {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;