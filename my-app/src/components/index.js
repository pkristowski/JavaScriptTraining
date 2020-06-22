import React from 'react';

// class HelloWorld extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             zmiany: "Hello World"
//         }
//     }

//     handleClick() {
//         alert("Klikłem");
//         this.setState({
//             zmiany: "Elo elo 3 2 0"
//         })
//     }

//     render() {

//         return (
//             <div className="fajna-klasa">
//                 <h1 onClick={this.handleClick.bind(this)}>{this.state.zmiany}</h1>
//             </div>
//         )
//     }
// }

// export default HelloWorld;


export default class Message extends React.Component {
    render() {
        const {title, children} = this.props;
        return (
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        )
    }
}

