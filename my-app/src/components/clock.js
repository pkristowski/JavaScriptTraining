import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
        setInterval(this.handleClick.bind(this), 1000);
    }


    handleClick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>Is it {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;