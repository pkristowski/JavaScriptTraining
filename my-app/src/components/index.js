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


// export default class Message extends React.Component {

//     constructor(props) {
//                 super(props);

//                 this.state = {
//                     zmiany: "Hello World",
//                     licznik: 0
//                 }
//             }

//             handleClick() {
//                 this.state.licznik++;
//                 console.log("Kliknięcie: " + this.state.licznik);
//             }

//     render() {
//         const { title, licznik } = this.props;
//         return (
//             <div>
//                 <h2>{title}</h2>
//                 <p>{licznik}</p>
//             </div>
//         )
//     }
// }


export default class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: props.defaultValue,
        }
    }


    handleClick() {
        this.setState({
            clicks: this.state.clicks + 1,
        })
    }

    render() {
        const { clicks } = this.state;
        return (
            <div>
                <div>
                    <strong>{clicks}</strong>
                </div>
                <input onClick={this.handleClick.bind(this)} type="button" value="Kliknij" />
            </div>
        )
    }
}


