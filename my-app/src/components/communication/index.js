import React, { Component } from 'react';

export default class InputTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    handleOnChange = event => {
        this.setState({
            input: event.target.value
        });
    };
    render() {
        return (
            <div>
                <input type="text" onChange={this.handelOnChange} />
                <img src={`https://unsplash.it/150/150?image=${this.state.input}`} />
            </div>
        )
    };
}